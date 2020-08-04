SET FOREIGN_KEY_CHECKS=0;


INSERT INTO `t_config_global` (`id`, `lang`, `selected`) VALUES ('1', 'zh', '1');
INSERT INTO `t_config_global` (`id`, `lang`, `selected`) VALUES ('2', 'en', '0');

-- 菜单项
INSERT INTO ow_menu(`id`, `page_id`,`name`, `constant`, `identifier`) VALUES(1, 1, "首页" , 1, "portal");
INSERT INTO ow_menu(`id`, `page_id`,`name`, `lowest`, `constant`, `identifier`) VALUES(2, 2, "关于MUASKIN", 0, 1, "about");
INSERT INTO ow_menu(`id`, `page_id`,`name`, `lowest`, `constant`, `identifier`) VALUES(3, 3, "体验中心", 0 , 1, "trial");
INSERT INTO ow_menu(`id`, `page_id`,`name`, `lowest`, `constant`, `identifier`) VALUES(4, 4, "所有产品" , 1, 1, "product");
INSERT INTO ow_menu(`id`, `page_id`,`name`, `lowest`, `constant`, `identifier`) VALUES(5, 5, "成分党", 0, 1, "element");
INSERT INTO ow_menu(`id`, `page_id`,`name`, `lowest`, `constant`, `identifier`) VALUES(6, 6, "会员中心", 1 , 1, "account");
INSERT INTO ow_menu(`id`, `page_id`,`name`, `lowest`, `constant`, `identifier`) VALUES(7, 7, "美丽课堂", 0, 1, "course");


INSERT INTO ow_menu(`id`,`pid`, `name`, `constant`, `page_id` ) VALUES(8, 2,"品牌介绍", 1, 8 );
INSERT INTO ow_menu(`id`,`pid`, `name`, `constant`, `page_id`  ) VALUES(9, 2,"品牌故事", 1, 9 );
INSERT INTO ow_menu(`id`,`pid`, `name`, `constant`, `page_id`  ) VALUES(10, 2,"品牌特色", 1, 10 );
INSERT INTO ow_menu(`id`,`pid`, `name`, `constant` ) VALUES(11, 2,"最新动态", 0 );

INSERT INTO ow_menu(`id`,`pid`, `name`, `constant` ) VALUES(12, 3,"智慧美妆", 0 );
INSERT INTO ow_menu(`id`,`pid`, `name`, `constant` ) VALUES(13, 3,"线下门店", 0 );


INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(19, 5,"成分的奥秘", 1 );


INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(27, 6,"加入会员", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(28, 6,"会员臻享", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(29, 6,"在线测试", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(30, 6,"检测报告", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(31, 6,"我的美肤方案", 1 );

INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(32, 7,"潮流美妆", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(33, 7,"美丽公开课", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name`, `constant` ) VALUES(34, 7,"互动分享", 1 );


-- 页面
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(1, '首页', 'html', 1, "portal");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(2, '关于MUASKIN', 'html', 1, "about");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(3, '体验中心', 'html', 1, "trial");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(4, '所有产品', 'html', 1, "product");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(5, '成分党', 'html', 1, "element");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(6, '会员中心', 'html', 1, "account");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(7, '美丽课堂', 'html', 1, "course");

INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(8, '品牌介绍', 'rtf', 1, "course_introduce");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(9, '品牌故事', 'rtf', 1, "course_story");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(10, '品牌特色', 'rtf', 1, "course_feature");
INSERT INTO ow_page(`id`, `name`, `type`, `constant`, `identifier`) VALUES(11, '页脚', 'footer', 1, "footer");


-- 轮播图分组
INSERT INTO t_ad_group(`id`, `name`, `identifier`) VALUES(100, '首页轮播图', 'portal');
INSERT INTO t_ad_group(`id`, `name`, `identifier`) VALUES(101, '产品轮播图', 'product');
INSERT INTO t_ad_group(`id`, `name`, `identifier`) VALUES(102, '成分党轮播图', 'element');

-- INSERT INTO perm(`id`, `groudid`, `identifier`, `name`) VALUES(1026783397059710978, 1026783397089071107, 'ImagesService.view', '查看ImagesService');
-- INSERT INTO perm(`id`, `groudid`, `identifier`, `name`) VALUES(1026783397089071105, 1026783397089071107, 'ImagesService.edit', '编辑ImagesService');


-- ----------------------------
-- Table structure for t_config
-- ----------------------------

INSERT INTO `t_config_field_group` (`id`, `pid`, `lang`, `name`, `comment`, `sort`, `type`) VALUES ('2', NULL, 'zh', '数据字典', NULL, '1', 'OPTION');


INSERT INTO `t_ad_group` (`id`, `name`, `identifier`) VALUES ('4', 'banner', 'banner');
INSERT INTO `t_ad_group` (`id`, `name`, `identifier`) VALUES ('6', 'about', 'about');
INSERT INTO `t_ad_group` (`id`, `name`, `identifier`) VALUES ('7', 'trial', 'trial');
INSERT INTO `t_ad_group` (`id`, `name`, `identifier`) VALUES ('8', 'account', 'account');
INSERT INTO `t_ad_group` (`id`, `name`, `identifier`) VALUES ('9', 'course', 'course');

INSERT INTO `t_ad` (`id`, `group_id`, `name`, `image`, `type`, `enabled`, `target_url`, `strategy`, `seq`) VALUES ('103', '5', '三步直达美肤', '/portal/images/100000000000000001/0e2ff29d-ecf7-4dd8-b25b-18f23b51995e.jpg', NULL, '1', NULL, NULL, '0');
INSERT INTO `t_ad` (`id`, `group_id`, `name`, `image`, `type`, `enabled`, `target_url`, `strategy`, `seq`) VALUES ('4', '5', '首页轮播-为新生代成分党而生', '/portal/images/100000000000000001/0fe9d859-190a-488c-8aaa-a2fa363da4b9.gif', NULL, '1', NULL, NULL, '0');
INSERT INTO `t_ad` (`id`, `group_id`, `name`, `image`, `type`, `enabled`, `target_url`, `strategy`, `seq`) VALUES ('5', '5', '首页轮播-肌肤管理定制时代', '/portal/images/100000000000000001/738c8dc2-e9b4-41a6-b639-542da8c52967.jpg', NULL, '1', NULL, NULL, '0');
INSERT INTO `t_ad` (`id`, `group_id`, `name`, `image`, `type`, `enabled`, `target_url`, `strategy`, `seq`) VALUES ('6', '2', '产品轮播-产品', '/portal/images/100000000000000001/7d0ce01a-30d8-410c-8f6c-82913ba4e588.png', NULL, '1', NULL, NULL, '0');
INSERT INTO `t_ad` (`id`, `group_id`, `name`, `image`, `type`, `enabled`, `target_url`, `strategy`, `seq`) VALUES ('7', '3', '成分党', '/portal/images/100000000000000001/97c606be-4f94-42ce-a1f0-c0546df78e2c.jpg', NULL, '1', NULL, NULL, '0');






INSERT INTO `sys_perm_group` (`id`, `pid`,`org_id`,`name`, `identifier`) VALUES
('100600000000000001' ,'100000000000000006', '100000000000000001','日志配置', 'contract.management');
INSERT INTO `sys_perm` (`id`, `group_id`, `name`, `identifier`) VALUES
('100000000000006001', '100600000000000001', '查看日志', 'OperationLog.view');


INSERT INTO `t_notice` ( `author`, `title`, `content`, `type`, `status`, `enabled`, `create_time`, `update_time`, `end_time`, `sort_num`) VALUES ('admin', '系统公告', '欢迎使用本系统', 'System', 'Draft', '1', '2019-05-01 09:11:35', NULL, '2050-12-04 09:06:48', '1');
INSERT INTO `t_notice` ( `author`, `title`, `content`, `type`, `status`, `enabled`, `create_time`, `update_time`, `end_time`, `sort_num`) VALUES ('admin', '外部公告', '你好，新朋友！', 'External', 'Draft', '1', '2019-09-01 09:12:08', NULL, '2049-12-01 09:06:48', '3');
