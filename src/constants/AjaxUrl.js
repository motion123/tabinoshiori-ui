/**
 * Created by tomihei on 17/02/15.
 */

const base = "http://localhost:3000/";

export const LOGIN_URL = base + "users/login";
export const TOKEN_AUTH_URL = base + "users/auth/";
export const NEWUSER_URL = base + "users/new";

export const BOOKMARK = base + "bookmark/";
export const CBR = base + "bookmark/new";
export const CHANGE_TRIP_INFO = base + "bookmark/edit/trip/order";
export const ADD_TRIP_INFO = base +"bookmark/edit/trip";

export const COMMENT = base + "comment/";

export const FOLLOW = base+ "follow/new";
export const DEFOLLOW = base + "follow/board/";
export const DEFOLLOW_USER = base + "follow/user/";
export const FOLLOW_INFO_BOARD = base + "follow/er/board/";
export const FOLLOW_INFO_USER = base + "follow/er/user/";
export const FOLLOWER_INFO = base + "follow/er/";
export const FOLLOWEE_INFO = base + "follow/ee/";


export const SEARCH_VIDEO = base + "search/video/";
