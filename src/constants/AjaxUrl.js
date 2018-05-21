/**
 * Created by tomihei on 17/02/15.
 */

const base = "http://localhost:3000/";

export const LOGIN_URL = base + "users/login";
export const TOKEN_AUTH_URL = base + "users/auth/";
export const NEWUSER_URL = base + "users/new";

export const USER_PAGE_REQUEST = base + "users/personal/";

export const BOOKMARK = base + "bookmark/";
export const CBR = base + "bookmark/new";
export const CHANGE_TRIP_INFO = base + "bookmark/trip/order";
export const ADD_TRIP_INFO = base +"bookmark/trip/new";
export const EDIT_TRIP_INFO = base +"bookmark/tripinfo";
export const DELETE_TRIP_INFO = base +"bookmark/trip";
export const ADD_PERMISSION = base + "bookmark/permission";
export const DELETE_PERMISSION = base + 'bookmark/permission';
export const BOOKMARK_LIST = base + "bookmark/user";

export const COMMENT = base + "comment/";

export const FOLLOW = base+ "follow/new";
export const DEFOLLOW_USER = base + "follow/";
export const FOLLOW_INFO_USER = base + "follow/er/user/";
export const FOLLOWER_INFO = base + "follow/er/";
export const FOLLOWEE_INFO = base + "follow/ee/";


export const SEARCH_VIDEO = base + "search/video/";
