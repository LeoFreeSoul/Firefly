import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像：暂时沿用模板图片，之后可替换为个人头像
	avatar: "assets/images/avatar.avif",

	// 名字
	name: "魂灵",

	// 个人签名
	bio: "收藏灵感，记录生活",

	// 个人链接
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/LeoFreeSoul",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
