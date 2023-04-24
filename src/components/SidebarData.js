import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "App Links",
	path: "/links",
	icon: <AiIcons.AiOutlineLink />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "AIR",
		path: "/links/air",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "RMS",
		path: "/links/RMS",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Home",
	path: "/",
	icon: <AiIcons.AiFillHome  />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Integration Portal",
	path: "/portal",
	icon: <FaIcons.FaTelegram />,
},
{
	title: "New Project",
	path: "/new",
	icon: <FaIcons.FaClock/>,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Admin",
	path: "/admin",
	icon: <FaIcons.FaCog />,
},
];

