const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

//set up endpoints
var apiRouter = function (app) {
    app.get("/homepage-photos", function (req, res) {
        getPhotoObjects("homepage/", res);
    });

    app.get("/thumbnails", function (req, res) {
        getPhotoObjects("thumbnails/", res);
    });

    app.get("/projects/:project", function (req, res) {
        var proj_dir = "projects/" + req.params.project + "/";
        getPhotoObjects(proj_dir, res);
    });
};

function getPhotoObjects(directory, res){
    var prefix = 'photos/' + directory;

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
            //base url for images
            var s3_url = "http://elasticbeanstalk-us-east-1-200745676188.s3.amazonaws.com/";
            var photos_obj = {};
            photos_obj.photos = [];
            var image_paths = data.Contents.map(item => item.Key);
            var photo_key = 0;

            //construct image objects using image paths
            image_paths.forEach(function(image_path){
                var image_path_split = image_path.split("photos/" + directory);
                if (image_path_split[1] !== "") {
                    //parse the image names
                    var project_name = image_path_split[1].split(".jpg")
                    var display_name = replaceAll(project_name[0], "-", " ");
                    var photo_obj = {
                        key: photo_key,
                        photo_url: s3_url + image_path,
                        project_name: project_name[0],
                        display_name: display_name
                    };
                    photos_obj.photos.push(photo_obj);
                    photo_key++;
                }
            });

            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).send(JSON.stringify(photos_obj));
        }
    });
}

//regular expression helpers
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

module.exports = apiRouter;