import { useState, useEffect } from "react";
import axios from "axios";

function BlogAPI() {
	const [category, setCategory] = useState();
	const [name, setName] = useState();
	const [date, setDate] = useState();
	const [img, setImg] = useState();
	const [imgName, setImgName] = useState();
	const [title, setTitle] = useState();
	const [type, setType] = useState();
	const [info, setInfo] = useState();
	const [subHeading, setSubHeading] = useState();
	const [tags, setTags] = useState();
	const [link, setLink] = useState();
	const [editBlog, setEditBlog] = useState(false);

	return {
		callback: [callback, setCallback],
	};
}

export default BlogAPI;
