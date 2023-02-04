const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    firstImage:String,
    apiApproach_content:String,
    apiDevelopment_content:String,
    changeContent:String,
    changeImage:String,
    diminishingContent:String,
    diminishingImage:String,
    fb_link:String,
    glimpse_content:String,
    heyguys_content:String,
    insta_link:String,
    secondImage:String,
    sekret_content:String,
    solutionImage:String,
    solution_content:String,
    toomanycontent:String,
    toomanyimage:String,
    tweeter_link:String,
    weare_content:String,
    pinterest_link:String,
    changesmallcontent:String,
    diminishingsmallcontent:String,
    toomanysmallcontent:String,
    seekers_cutting_edge:String
})


const ContentModel = mongoose.model('content',contentSchema);

module.exports = {
    ContentModel
}