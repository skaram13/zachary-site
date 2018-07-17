const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

//set up endpoints
const apiRouter = function (app) {
    app.get("/homepage-photos", function (req, res) {
        getObjects("homepage/", res, true, false);
    });

    app.get("/thumbnails", function (req, res) {
        getObjects("thumbnails/", res, true, false);
    });

    app.get("/projects/:project", function (req, res) {
        const proj_dir = "projects/" + req.params.project + "/";
        getObjects(proj_dir, res, true, false);
    });

    app.get("/blog", function (req, res) {
        getObjects("blog/", res, false ,true);
    });
};

function getObjects(directory, res, photo, blog){
    let prefix = directory;
    if(photo) {
        prefix = 'photos/' + prefix;
    }

    //AWS setup to access photos
    var bucketParams = {
        Bucket : "elasticbeanstalk-us-east-1-200745676188",
        Prefix: prefix
    };

    // Call S3(Amazon Simple Storage Service) to retrieve information
    s3.listObjects(bucketParams, function(err, data) {
        if (err) {
            console.log("Error: ", err);
        } else {
            //base url for content
            const s3_url = "http://elasticbeanstalk-us-east-1-200745676188.s3.amazonaws.com/";
            const file_names = data.Contents.map(item => item.Key);
            let final_obj = {};

            if(photo){
                final_obj = createPhotoObjects(s3_url, file_names, directory);
            }

            if(blog){
                final_obj = createBlogObjects(s3_url, file_names, directory);
            }

            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).send(JSON.stringify(final_obj));
        }
    });
}

function createBlogObjects(s3_url, blog_paths, directory){
    let blog_posts_obj = {};
    blog_posts_obj.posts = [];
    let blog_key = 0;

    console.log(blog_paths);
    //construct blog objects using blog paths
    blog_paths.forEach(function(blog_path){
        const blog_path_split = blog_path.split("/");
        //only use paths that reach 3 levels deep i.e. blog/2018/Post-Modern-Post.pdf
        if (blog_path_split.length === 3) {
            if(blog_path_split[2].length > 0){
                //parse the pdf names
                const blog_year = blog_path_split[1];
                const blog_split_order = blog_path_split[2].split("_");
                const blog_post_order_number = blog_split_order[0];
                const blog_post_name = blog_split_order[1].split(".pdf");
                const display_name = replaceAll(blog_post_name[0], "-", " ");

                blog_posts_obj.posts.push({
                    key: blog_key,
                    blog_url: s3_url + blog_path,
                    blog_name: blog_post_name[0],
                    display_name: display_name,
                    order_number: blog_post_order_number,
                    blog_year: blog_year
                });

                blog_key++;
                console.log(blog_posts_obj);
            }
        }
    });

    return blog_posts_obj;
}

function createPhotoObjects(s3_url, image_paths, directory){
    let photos_obj = {};
    photos_obj.photos = [];
    let photo_key = 0;

    //construct image objects using image paths
    image_paths.forEach(function(image_path){
        const image_path_split = image_path.split("photos/" + directory);
        if (image_path_split[1] !== "") {
            //parse the image names
            const project_name = image_path_split[1].split(".jpg")
            const  display_name = replaceAll(project_name[0], "-", " ");
            const photo_obj = {
                key: photo_key,
                photo_url: s3_url + image_path,
                project_name: project_name[0],
                display_name: display_name
            };
            photos_obj.photos.push(photo_obj);
            photo_key++;
        }
    });

    return photos_obj;
}
//regular expression helpers
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

module.exports = apiRouter;