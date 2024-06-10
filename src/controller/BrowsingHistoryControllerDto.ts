/**
 * 用户浏览历史
 */
type BrowsingHistory = {
	/** 用户的 UID - 非空 */
	uid: number;
	/** 浏览的内容的类型，比如说 video, photo 等 - 非空 */
	type: 'video' | 'photo' | 'comment';
	/** 浏览的内容的唯一 ID - 非空 */
	id: string;
}

/**
 * 创建用户浏览历史的请求载荷
 */
export type CreateBrowsingHistoryRequestDto = BrowsingHistory & {}

/**
 * 创建用户浏览历史的请求响应
 */
export type CreateBrowsingHistoryResponseDto = {
	/** 是否请求成功 */
	success: boolean;
	/** 附加的文本消息 */
	message?: string;
	/** 如果成功，返回创建的这个浏览历史数据 */
	result?: BrowsingHistory;
}