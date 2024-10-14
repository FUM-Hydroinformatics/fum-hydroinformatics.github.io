interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'محمدجواد رضوان پور', // Site author
	title: 'هیدروانفورماتیک فردوسی', // Site title.
	description: 'رشته هیدروانفورماتیک گروه آب فردوسی', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'اشتراک گذاری مطلب', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
