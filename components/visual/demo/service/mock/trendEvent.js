/* eslint-disable */
const Mock = require('mockjs');

const trend = function() {
    return [{
        "name": "ORP上线",
        "type": "searchbox_orpLaunch",
        "events": [{
            "startTime": 1543546065,
            "endTime": 1543546497,
            "detail": "webpage-tpl游客账号",
            "url": "https://www.baidu.com?menuId=3731447"
        }, {
            "startTime": 1543546181,
            "endTime": 1543546613,
            "detail": "20181130年底狂欢",
            "url": "https://www.baidu.com?menuId=3731299"
        }, {
            "startTime": 1543546404,
            "endTime": 1543546836,
            "detail": "20181130年底狂欢",
            "url": "https://www.baidu.com?menuId=3731299"
        }, {
            "startTime": 1543547139,
            "endTime": 1543547571,
            "detail": "模块A配置修改",
            "url": "https://www.baidu.com?menuId=3727408"
        }, {
            "startTime": 1543547877,
            "endTime": 1543548309,
            "detail": "[评论][unicomment]评论实验",
            "url": "https://www.baidu.com?menuId=3731585"
        }, {
            "startTime": 1543547967,
            "endTime": 1543548399,
            "detail": "[评论][unicomment]评论实验",
            "url": "https://www.baidu.com?menuId=3731585"
        }, {
            "startTime": 1543548482,
            "endTime": 1543548914,
            "detail": "[评论][unicomment]评论实验",
            "url": "https://www.baidu.com?menuId=3731585"
        }, {
            "startTime": 1543548509,
            "endTime": 1543548941,
            "detail": "模块B bug修复",
            "url": "https://www.baidu.com?menuId=3727604"
        }, {
            "startTime": 1543548632,
            "endTime": 1543549064,
            "detail": "模块B bug修复",
            "url": "https://www.baidu.com?menuId=3727604"
        }, {
            "startTime": 1543548871,
            "endTime": 1543549303,
            "detail": "[评论][unicomment]评论实验",
            "url": "https://www.baidu.com?menuId=3731585"
        }, {
            "startTime": 1543548997,
            "endTime": 1543549429,
            "detail": "模块B bug修复",
            "url": "https://www.baidu.com?menuId=3727604"
        }, {
            "startTime": 1543549921,
            "endTime": 1543550353,
            "detail": "模块B bug修复",
            "url": "https://www.baidu.com?menuId=3727604"
        }, {
            "startTime": 1543552691,
            "endTime": 1543553123,
            "detail": "2018-11-30年底狂欢",
            "url": "https://www.baidu.com?menuId=3732106"
        }, {
            "startTime": 1543552922,
            "endTime": 1543553354,
            "detail": "2018-11-30年底狂欢",
            "url": "https://www.baidu.com?menuId=3732106"
        }, {
            "startTime": 1543553098,
            "endTime": 1543553615,
            "detail": "模块B bug修复",
            "url": "https://www.baidu.com?menuId=3727604"
        }, {
            "startTime": 1543553433,
            "endTime": 1543553865,
            "detail": "2018-11-30年底狂欢",
            "url": "https://www.baidu.com?menuId=3732106"
        }, {
            "startTime": 1543553617,
            "endTime": 1543554049,
            "detail": "模块B bug修复",
            "url": "https://www.baidu.com?menuId=3727604"
        }, {
            "startTime": 1543554100,
            "endTime": 1543554532,
            "detail": "2018-11-30年底狂欢",
            "url": "https://www.baidu.com?menuId=3732106"
        }, {
            "startTime": 1543554539,
            "endTime": 1543554971,
            "detail": "模块C框架过滤日志",
            "url": "https://www.baidu.com?menuId=3712577"
        }, {
            "startTime": 1543554631,
            "endTime": 1543555325,
            "detail": "2018-11-30年底狂欢",
            "url": "https://www.baidu.com?menuId=3732106"
        }, {
            "startTime": 1543554637,
            "endTime": 1543555069,
            "detail": "模块C框架过滤日志",
            "url": "https://www.baidu.com?menuId=3712577"
        }, {
            "startTime": 1543554776,
            "endTime": 1543555208,
            "detail": "[评论][unicomment]评论实验",
            "url": "https://www.baidu.com?menuId=3731585"
        }, {
            "startTime": 1543555103,
            "endTime": 1543555535,
            "detail": "[评论][unicomment]评论实验",
            "url": "https://www.baidu.com?menuId=3731585"
        }, {
            "startTime": 1543555327,
            "endTime": 1543555759,
            "detail": "2018-11-30年底狂欢",
            "url": "https://www.baidu.com?menuId=3732106"
        }, {
            "startTime": 1543556186,
            "endTime": 1543556618,
            "detail": "[评论]模块D切换流量入口",
            "url": "https://www.baidu.com?menuId=3731645"
        }, {
            "startTime": 1543556570,
            "endTime": 1543557002,
            "detail": "[评论]模块D切换流量入口",
            "url": "https://www.baidu.com?menuId=3731645"
        }, {
            "startTime": 1543557845,
            "endTime": 1543558277,
            "detail": "2018-11-30年底狂欢，模块E相关",
            "url": "https://www.baidu.com?menuId=3732478"
        }, {
            "startTime": 1543557936,
            "endTime": 1543558368,
            "detail": "2018-11-30年底狂欢，模块E相关",
            "url": "https://www.baidu.com?menuId=3732478"
        }, {
            "startTime": 1543557962,
            "endTime": 1543558394,
            "detail": "［webpage］模块F转发配置问题",
            "url": "https://www.baidu.com?menuId=3732382"
        }, {
            "startTime": 1543558440,
            "endTime": 1543558872,
            "detail": "2018-11-30年底狂欢，模块E相关",
            "url": "https://www.baidu.com?menuId=3732478"
        }, {
            "startTime": 1543558477,
            "endTime": 1543558909,
            "detail": "切换数据库配置",
            "url": "https://www.baidu.com?menuId=3731670"
        }, {
            "startTime": 1543558748,
            "endTime": 1543559180,
            "detail": "切换数据库配置",
            "url": "https://www.baidu.com?menuId=3731670"
        }, {
            "startTime": 1543559111,
            "endTime": 1543559543,
            "detail": "2018-11-30年底狂欢，模块E相关",
            "url": "https://www.baidu.com?menuId=3732478"
        }, {
            "startTime": 1543559517,
            "endTime": 1543559949,
            "detail": "2018-11-30年底狂欢，模块E相关关",
            "url": "https://www.baidu.com?menuId=3732478"
        }, {
            "startTime": 1543559647,
            "endTime": 1543560079,
            "detail": "2018-11-30年底狂欢，模块E相关",
            "url": "https://www.baidu.com?menuId=3732478"
        }]
    }]
}
 
Mock.mock('/mock/trendEvent', 'post', trend);