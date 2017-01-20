
import React from "react";
import Lightbox from 'react-images';

var Gallery = React.createClass({
  test() {
    console.log('test');
  },
  render() {
    return (
      <div className="gallery" id="gallery">

        <div ><object width="100%" height="500" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"> <param name="flashvars" value="offsite=true&amp;lang=en-us&amp;page_show_url=%2Fphotos%2F150990885%40N05%2Fshow&amp;page_show_back_url=%2Fphotos%2F150990885%40N05%2F&amp;user_id=150990885@N05" /> <param name="allowFullScreen" value="true" /> <param name="src" value="https://www.flickr.com/apps/slideshow/show.swf?v=71649" /> <embed width="500" height="500" type="application/x-shockwave-flash" src="https://www.flickr.com/apps/slideshow/show.swf?v=71649" flashvars="offsite=true&amp;lang=en-us&amp;page_show_url=%2Fphotos%2F150990885%40N05%2Fshow&amp;page_show_back_url=%2Fphotos%2F150990885%40N05%2F&amp;user_id=150990885@N05" allowFullScreen="true" /> </object><br /></div>

      </div>

    );
  }
});

module.exports = Gallery;