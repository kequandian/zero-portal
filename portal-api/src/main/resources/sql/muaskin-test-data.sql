-- 测试
INSERT INTO ow_page(`id`, `name`, `type`) VALUES(1, '测试页面', 'html');
INSERT INTO ow_page(`id`, `name`, `type`) VALUES(2, '测试页面', 'rtf');

INSERT INTO ow_menu(`id`, `pid`, `page_id`, `name` ) VALUES(100, 2, 1, "html页面测试" );
INSERT INTO ow_menu(`id`, `pid`, `page_id`, `name` ) VALUES(101, 2, 2, "富文本测试" );

INSERT INTO ow_page_image(`id`, `page_id`, `url`, `carousel`) VALUES(1, 1, 'test url', 0);
INSERT INTO ow_page_image(`id`, `page_id`, `url`, `carousel`) VALUES(2, 1, 'test url', 0);
INSERT INTO ow_page_image(`id`, `page_id`, `url`, `carousel`) VALUES(3, 1, 'test url', 1);
INSERT INTO ow_page_image(`id`, `page_id`, `url`, `carousel`) VALUES(4, 1, 'test url', 1);

INSERT INTO ow_page_text(`id`, `page_id`, `content`) VALUES(5, 2, 'test text');


-- 富文本内容
INSERT INTO `ow_page_text` VALUES ('1', '1', '<p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/36d01493-a467-4ef2-91b5-9ec9137f4e0a.png\"/></div><p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/f51bdd2b-daf1-45e7-ad01-c305d829d739.png\"/></div><p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/82e2216d-4eb4-4a6c-8356-0bf470a9530d.png\"/></div><p></p>');
INSERT INTO `ow_page_text` VALUES ('2', '2', '<p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/3a50ddab-cd99-48fc-ba89-16f4201444ba.png\"/></div><p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/cad2cca2-cb70-4c2f-bbd5-4164bcf1f652.png\"/></div><p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/2c7bf5df-c155-4652-b838-243cbc546f26.png\"/></div><p></p>');
INSERT INTO `ow_page_text` VALUES ('3', '3', '<p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/ef074231-227c-4571-8c40-228dce8aa90e.png\"/></div><p></p>');
INSERT INTO `ow_page_text` VALUES ('4', '4', '<p></p><div class=\"media-wrap image-wrap\"><img src=\"http://120.79.77.207:8080/images/null/76796e99-aa04-484c-8936-fb16458ef054.png\"/></div><p></p>');
INSERT INTO `ow_page_text` VALUES ('5', '19', '<p>成分的奥秘...</p>');
INSERT INTO `ow_page_text` VALUES ('6', '20', '<p>337...</p>');
INSERT INTO `ow_page_text` VALUES ('7', '21', '<p>左旋VC...</p>');
INSERT INTO `ow_page_text` VALUES ('8', '22', '<p>烟酰胺...</p>');
INSERT INTO `ow_page_text` VALUES ('9', '24', '<p>神经酰胺...</p>');
INSERT INTO `ow_page_text` VALUES ('10', '23', '<p>玻尿酸...</p>');


-- 成分党
INSERT INTO ow_menu(`id`, `pid`, `name`) VALUES(20, 5,"337" );
INSERT INTO ow_menu(`id`, `pid`, `name` ) VALUES(21, 5,"左旋VC" );
INSERT INTO ow_menu(`id`, `pid`, `name`) VALUES(22, 5,"烟酰胺" );
INSERT INTO ow_menu(`id`, `pid`, `name`) VALUES(23, 5,"玻尿酸" );
INSERT INTO ow_menu(`id`, `pid`, `name`) VALUES(24, 5,"神经酰胺" );
INSERT INTO ow_menu(`id`, `pid`, `name`) VALUES(25, 5,"苯乙基间苯二酚" );
INSERT INTO ow_menu(`id`, `pid`, `name`) VALUES(26, 5,"乙酰基六肽-8" );


-- 产品
INSERT INTO ow_menu(`id`, `pid`, `name` ) VALUES(14, 4,"美白秘籍", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name` ) VALUES(15, 4,"保湿嫩肤", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name` ) VALUES(16, 4,"抗哀逆时", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name` ) VALUES(17, 4,"抗敏舒缓", 1 );
INSERT INTO ow_menu(`id`, `pid`, `name` ) VALUES(18, 4,"抗痘无形", 1 );