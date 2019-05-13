-- 菜单项
INSERT INTO ow_menu(`id`, page_id, `name`, `constant`, `identifier`) VALUES(1, 1, "首页" , 1, "portal");
INSERT INTO ow_menu(`id`, page_id, `name`, `lowest`, `constant`, `identifier`) VALUES(2, 2, "关于MUASKIN", 0, 1, "about");
INSERT INTO ow_menu(`id`, page_id, `name`, `lowest`, `constant`, `identifier`) VALUES(3, 3, "体验中心", 0 , 1, "trial");
INSERT INTO ow_menu(`id`, page_id, `name`, `lowest`, `constant`, `identifier`) VALUES(4, 4, "所有产品" , 1, 1, "product");
INSERT INTO ow_menu(`id`, page_id, `name`, `lowest`, `constant`, `identifier`) VALUES(5, 5, "成分党", 0, 1, "element");
INSERT INTO ow_menu(`id`, page_id, `name`, `lowest`, `constant`, `identifier`) VALUES(6, 6, "会员中心", 1 , 1, "account");
INSERT INTO ow_menu(`id`, page_id, `name`, `lowest`, `constant`, `identifier`) VALUES(7, 7, "美丽课堂", 0, 1, "course");


INSERT INTO ow_menu(`id`, `pid`, `name`, `constant`, `page_id` ) VALUES(8, 2,"品牌介绍", 1, 8 );
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
INSERT INTO t_ad_group(`id`, `name`, `identifier`) VALUES(1, '首页轮播图', 'portal');
INSERT INTO t_ad_group(`id`, `name`, `identifier`) VALUES(2, '产品轮播图', 'product');
INSERT INTO t_ad_group(`id`, `name`, `identifier`) VALUES(3, '成分党轮播图', 'element');
