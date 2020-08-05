SET FOREIGN_KEY_CHECKS=0;


INSERT INTO `t_config_global` (`id`, `lang`, `selected`) VALUES ('1', 'zh', '1');
INSERT INTO `t_config_global` (`id`, `lang`, `selected`) VALUES ('2', 'en', '0');

-- INSERT INTO perm(`id`, `groudid`, `identifier`, `name`) VALUES(1026783397059710978, 1026783397089071107, 'ImagesService.view', '查看ImagesService');
-- INSERT INTO perm(`id`, `groudid`, `identifier`, `name`) VALUES(1026783397089071105, 1026783397089071107, 'ImagesService.edit', '编辑ImagesService');


-- ----------------------------
-- Table structure for t_config
-- ----------------------------

INSERT INTO `t_config_field_group` (`id`, `pid`, `lang`, `name`, `comment`, `sort`, `type`) VALUES ('2', NULL, 'zh', '数据字典', NULL, '1', 'OPTION');



INSERT INTO `sys_perm_group` (`id`, `pid`,`org_id`,`name`, `identifier`) VALUES
('100600000000000001' ,'100000000000000006', '100000000000000001','日志配置', 'contract.management');
INSERT INTO `sys_perm` (`id`, `group_id`, `name`, `identifier`) VALUES
('100000000000006001', '100600000000000001', '查看日志', 'OperationLog.view');


INSERT INTO `t_notice` ( `author`, `title`, `content`, `type`, `status`, `enabled`, `create_time`, `update_time`, `end_time`, `sort_num`) VALUES ('admin', '系统公告', '欢迎使用本系统', 'System', 'Draft', '1', '2019-05-01 09:11:35', NULL, '2050-12-04 09:06:48', '1');
INSERT INTO `t_notice` ( `author`, `title`, `content`, `type`, `status`, `enabled`, `create_time`, `update_time`, `end_time`, `sort_num`) VALUES ('admin', '外部公告', '你好，新朋友！', 'External', 'Draft', '1', '2019-09-01 09:12:08', NULL, '2049-12-01 09:06:48', '3');

INSERT INTO `t_ad_library` VALUES (21,'/portal/images/100000000000000001/0e2ff29d-ecf7-4dd8-b25b-18f23b51995e.jpg'),(23,'/portal/images/100000000000000001/0fe9d859-190a-488c-8aaa-a2fa363da4b9.gif'),(22,'/portal/images/100000000000000001/738c8dc2-e9b4-41a6-b639-542da8c52967.jpg'),(24,'/portal/images/100000000000000001/7d0ce01a-30d8-410c-8f6c-82913ba4e588.png'),(25,'/portal/images/100000000000000001/97c606be-4f94-42ce-a1f0-c0546df78e2c.jpg'),(20,'http://localhost:8080/portal/images/100000000000000001/df452da9-5614-4bc3-877c-fa855f9e21ab.jpg'),(29,'http://mall.smallsaas.cn/images/mallsaas/ad/75873707099f2f57835888d41c15099e.jpg'),(13,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/023a1185-5e06-4928-bddb-ca8f790d1efc.jpg'),(10,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/04c98d8d-4b20-49f4-9433-7aad43196b6b.jpg'),(15,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/316b0778-2921-48b7-a29c-6dfd640ae6a5.jpg'),(16,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/50330f6d-7db6-4af0-bf59-aaf28460d5fe.jpg'),(19,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/66fd3ba1-47cd-48d5-988c-1d0c4a268122.jpg'),(18,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/7306163e-b45e-4e54-9722-2b904e0bf6e0.png'),(14,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/b058ff54-a291-48a6-a37d-c1e9504dc24d.jpg'),(17,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/b0a83d34-04c0-458c-a1f1-784261e7f41b.gif'),(11,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/c586eebb-8a33-47ee-9f4b-24356d8725af.jpg'),(12,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/c8079da0-1c7f-4a19-bcba-8bfcb68d0e4b.jpg'),(8,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/f7b3a44a-266c-4088-bce8-91b8e47682f6.jpg'),(9,'http://muaskin.oss-cn-shenzhen.aliyuncs.com/fcfdfe7e-790d-44d1-a21c-ecc1ba23bbf6.jpg'),(2,'https://api.cloud.biliya.cn/images/alliance/ad/6a380e37cdcfbc7cebb2eca341d2084a.jpg'),(4,'https://api.cloud.biliya.cn/images/alliance/ad/86f39a7d8725ede85b6cf852fdff7a93.jpg'),(1,'https://api.cloud.biliya.cn/images/alliance/ad/db6da63c268e5097252a37f974a595d7.jpg'),(3,'https://api.cloud.biliya.cn/images/alliance/ad/f2c016c23aaefcf12d9bd284b3b1b9ea.jpg'),(40,'https://mall.smallsaas.cn/portal/images/100000000000000001/16cadd0e-9aac-498c-8343-addc980fea40.jpg'),(26,'https://mall.smallsaas.cn/portal/images/100000000000000001/1af46738-75a9-4080-8954-eb85b62ba73a.gif'),(42,'https://mall.smallsaas.cn/portal/images/100000000000000001/1f931abb-4827-40ff-a2f8-de690c2832e2.jpg'),(44,'https://mall.smallsaas.cn/portal/images/100000000000000001/2410ec9d-9a1a-4c4a-b447-a0f83bd94ede.jpg'),(38,'https://mall.smallsaas.cn/portal/images/100000000000000001/2f27f7b5-c79a-42e3-a167-80776518ca02.jpg'),(30,'https://mall.smallsaas.cn/portal/images/100000000000000001/35a8baa2-a237-4d89-84c7-71622cdb7637.jpg'),(47,'https://mall.smallsaas.cn/portal/images/100000000000000001/475296c6-bd71-4e5f-9fa6-fee17b07d4f5.jpg'),(31,'https://mall.smallsaas.cn/portal/images/100000000000000001/52cdf900-82f1-4d2b-9212-2c67a3df03d7.jpg'),(37,'https://mall.smallsaas.cn/portal/images/100000000000000001/65cdefd8-6abb-4261-ba3c-359c4a953b1c.jpg'),(39,'https://mall.smallsaas.cn/portal/images/100000000000000001/68b6612d-f503-4e40-a851-acb577c10f49.jpg'),(27,'https://mall.smallsaas.cn/portal/images/100000000000000001/6afd3de0-0485-49cd-9ff2-8d94ceea9ca7.jpg'),(34,'https://mall.smallsaas.cn/portal/images/100000000000000001/6f0812ac-ef99-49f9-87d4-c13d91bdcd85.jpg'),(33,'https://mall.smallsaas.cn/portal/images/100000000000000001/6f9ab8da-7a32-4c4b-ba8d-d33b550bb818.jpg'),(28,'https://mall.smallsaas.cn/portal/images/100000000000000001/78a2a055-030d-4e68-b73a-93f89e35edb2.jpg'),(48,'https://mall.smallsaas.cn/portal/images/100000000000000001/90f5560a-7d1a-405d-a161-66838319c95e.jpg'),(35,'https://mall.smallsaas.cn/portal/images/100000000000000001/91c2e2f8-1089-4869-864a-bc7d295e90e1.jpg'),(36,'https://mall.smallsaas.cn/portal/images/100000000000000001/cbf2cedd-95be-4f7f-821a-dcd1b27c8f51.jpg'),(32,'https://mall.smallsaas.cn/portal/images/100000000000000001/ceb3d1d7-d831-400d-bb20-84fd67a140a6.jpg'),(41,'https://mall.smallsaas.cn/portal/images/100000000000000001/e7219c8c-13d0-432c-8728-f751e640b04d.jpg'),(45,'https://mall.smallsaas.cn/portal/images/100000000000000001/eac43db5-c326-4280-a060-19c0391c0719.jpg'),(43,'https://mall.smallsaas.cn/portal/images/100000000000000001/f0cdcecc-3a19-4b88-9b76-e4e3774dddb9.jpg'),(46,'https://mall.smallsaas.cn/portal/images/100000000000000001/f82643c9-0b9d-49cd-9597-e5b4e9791a8b.jpg');
INSERT INTO `t_ad_group` VALUES (1,'home',NULL),(2,'product','product'),(3,'element','element'),(4,'banner','banner'),(5,'portal','portal'),(6,'about','about'),(7,'trial','trial'),(8,'account','account'),(9,'course','course');
INSERT INTO `t_ad` VALUES
 (1,1,'01','http://mall.smallsaas.cn/images/mallsaas/ad/75873707099f2f57835888d41c15099e.jpg','风景',1,'#/home/homePage','',0)
 ,(2,1,'02','https://mall.smallsaas.cn/portal/images/100000000000000001/91c2e2f8-1089-4869-864a-bc7d295e90e1.jpg','产品',1,'#/home/category/5','',0)
 ,(3,5,'首页轮播-中药文化，百年传承','https://mall.smallsaas.cn/portal/images/100000000000000001/ceb3d1d7-d831-400d-bb20-84fd67a140a6.jpg',NULL,1,NULL,NULL,0)
 ,(4,5,'首页轮播-一站式化妆品品牌服务加工平台','https://mall.smallsaas.cn/portal/images/100000000000000001/52cdf900-82f1-4d2b-9212-2c67a3df03d7.jpg',NULL,1,NULL,NULL,0)
 ,(5,5,'首页轮播-以人为本','https://mall.smallsaas.cn/portal/images/100000000000000001/6f9ab8da-7a32-4c4b-ba8d-d33b550bb818.jpg',NULL,1,NULL,NULL,0)
 ,(6,2,'产品轮播-产品','/portal/images/100000000000000001/7d0ce01a-30d8-410c-8f6c-82913ba4e588.png',NULL,0,NULL,NULL,0),(7,3,'成分党','/portal/images/100000000000000001/97c606be-4f94-42ce-a1f0-c0546df78e2c.jpg',NULL,0,NULL,NULL,0),(9,5,'首页轮播-最佳合作伙伴','https://mall.smallsaas.cn/portal/images/100000000000000001/6f0812ac-ef99-49f9-87d4-c13d91bdcd85.jpg',NULL,1,NULL,NULL,0),(10,1,'home321','https://mall.smallsaas.cn/portal/images/100000000000000001/2f27f7b5-c79a-42e3-a167-80776518ca02.jpg',NULL,1,'#/details/2','',0),(11,1,'home','https://mall.smallsaas.cn/portal/images/100000000000000001/65cdefd8-6abb-4261-ba3c-359c4a953b1c.jpg',NULL,1,'#/home/category/9',NULL,0),(12,1,'home','https://mall.smallsaas.cn/portal/images/100000000000000001/68b6612d-f503-4e40-a851-acb577c10f49.jpg',NULL,1,'#/home/category/4',NULL,0),(13,1,'home',NULL,NULL,1,'#/home/homePage',NULL,0),(14,1,'home7','https://mall.smallsaas.cn/portal/images/100000000000000001/16cadd0e-9aac-498c-8343-addc980fea40.jpg',NULL,1,'#/home/category/4',NULL,0),(15,2,'2','https://mall.smallsaas.cn/portal/images/100000000000000001/e7219c8c-13d0-432c-8728-f751e640b04d.jpg',NULL,1,NULL,NULL,0),(16,7,'1','https://mall.smallsaas.cn/portal/images/100000000000000001/1f931abb-4827-40ff-a2f8-de690c2832e2.jpg',NULL,1,NULL,NULL,0),(17,6,'1','https://mall.smallsaas.cn/portal/images/100000000000000001/f0cdcecc-3a19-4b88-9b76-e4e3774dddb9.jpg',NULL,0,NULL,NULL,0),(18,3,'2','https://mall.smallsaas.cn/portal/images/100000000000000001/2410ec9d-9a1a-4c4a-b447-a0f83bd94ede.jpg',NULL,1,NULL,NULL,0),(19,6,'2','https://mall.smallsaas.cn/portal/images/100000000000000001/f82643c9-0b9d-49cd-9597-e5b4e9791a8b.jpg',NULL,1,NULL,NULL,0),(20,8,'1','https://mall.smallsaas.cn/portal/images/100000000000000001/475296c6-bd71-4e5f-9fa6-fee17b07d4f5.jpg',NULL,1,NULL,NULL,0),(21,9,'1','https://mall.smallsaas.cn/portal/images/100000000000000001/90f5560a-7d1a-405d-a161-66838319c95e.jpg',NULL,1,NULL,NULL,0);


--
-- Dumping data for table `ow_menu`
--

INSERT INTO `ow_menu`(id,pid,name,page_id,constant,display,seq,note,lowest,identifier,cover,html,ad_identifier) VALUES
(1,NULL,'首页',1,1,1,6,NULL,1,'portal',NULL,'index.html','portal'),
(2,NULL,'关于我们',2,1,1,5,NULL,0,'about',NULL,'about.html','about'),
(3,NULL,'产品中心',3,1,1,3,NULL,0,'product',NULL,'product.html','product'),
(4,NULL,'服务优势',4,1,1,4,NULL,0,'trial',NULL,'test.html','trial'),
(5,NULL,'合作方式',5,1,1,2,NULL,0,'element',NULL,'ingredient.html','element'),
(6,NULL,'新闻中心',6,1,1,1,NULL,0,'account',NULL,'vipCenter.html','account'),
(7,NULL,'人才招聘',7,1,1,0,NULL,0,'course',NULL,'beautyClass.html','course'),
(8,2,'名仁堂简介',8,0,1,1,NULL,1,NULL,NULL,NULL,NULL),
(9,2,'总经理致辞',9,0,1,4,NULL,1,NULL,NULL,NULL,NULL),
(10,2,'公司荣誉',10,0,1,5,NULL,1,NULL,NULL,NULL,NULL),
(19,5,'OEM',12,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(27,6,'加入会员',15,0,1,2,NULL,1,NULL,NULL,NULL,NULL),
(28,6,'会员臻享',19,0,1,1,NULL,1,NULL,NULL,NULL,NULL),
(29,6,'在线测试',18,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(30,6,'检测报告',20,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(36,5,'ODM',13,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(37,5,'服务特色',14,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(47,5,'业务流程',25,0,1,3,NULL,1,NULL,NULL,NULL,NULL),
(48,2,'企业文化',26,0,1,2,NULL,1,NULL,NULL,NULL,NULL),
(49,2,'化妆品事业',27,0,1,3,NULL,1,NULL,NULL,NULL,NULL),
(50,2,'化妆品生产',28,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(51,2,'发展历程',29,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(52,2,'公司视频',30,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(53,5,'成功案例',31,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(54,5,'管理团队',32,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(55,6,'公司公告',33,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(56,6,'新闻咨询',34,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(57,6,'成功案例',35,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(67,4,'生产环境',45,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(68,4,'优质服务',46,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(69,4,'研发创新',47,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(70,4,'品质保障',48,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(71,4,'仓储物流',49,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(72,4,'采购平台',50,0,1,0,NULL,1,NULL,NULL,NULL,NULL),
(73,2,'关于我们',51,0,1,5,NULL,1,NULL,NULL,NULL,NULL),

(78,7,'招聘',56,0,1,1,NULL,1,NULL,NULL,NULL,NULL);

--
-- Dumping data for table `ow_page`
--

INSERT INTO `ow_page`(id,name,type,url,constant,identifier) VALUES
(1,'首页','html',NULL,1,'portal'),
(2,'关于i-softto','html',NULL,1,'about'),
(3,'体验中心','html',NULL,1,'trial'),
(4,'产品中心','html',NULL,1,'product'),
(5,'成分党','html',NULL,1,'element'),
(6,'会员中心','html',NULL,1,'account'),
(7,'美丽课堂','html',NULL,1,'course'),
(8,'品牌介绍','rtf',NULL,1,'course_introduce'),
(9,'品牌故事','rtf',NULL,1,'course_story'),
(10,'品牌特色','rtf',NULL,1,'course_feature'),
(11,'页脚','footer',NULL,1,'footer'),
(12,'成分党: 乳木果','rtf',NULL,1,''),
(13,'成分党: 六胜肽','rtf',NULL,0,''),
(14,'成分党: 337','rtf',NULL,0,''),
(15,'加入会员','rtf',NULL,0,NULL),
(18,'在线测试','rtf',NULL,0,NULL),
(19,'会员臻享','rtf',NULL,0,NULL),
(20,'检测报告','rtf',NULL,0,NULL),
(21,'我的美肤方案','rtf',NULL,0,NULL),
(23,'11','rtf',NULL,0,NULL),
(24,'222','rtf',NULL,0,NULL),
(25,'333','rtf',NULL,0,NULL),
(26,'企业文化','rtf',NULL,0,NULL),
(27,'化妆品事业','rtf',NULL,0,NULL),
(28,'化妆品生产','rtf',NULL,0,NULL),
(29,'发展历程','rtf',NULL,0,NULL),
(30,'公司视频','rtf',NULL,0,NULL),
(31,'成功案例','rtf',NULL,0,NULL),
(32,'管理团队','rtf',NULL,0,NULL),
(33,'公司公告','rtf',NULL,0,NULL),
(34,'新闻咨询','rtf',NULL,0,NULL),
(35,'成功案例','rtf',NULL,0,NULL),
(36,'生产环境','rtf',NULL,0,NULL),
(37,'优质服务','rtf',NULL,0,NULL),
(38,'研发创新','rtf',NULL,0,NULL),
(39,'品质保障','rtf',NULL,0,NULL),
(40,'优质服务','rtf',NULL,0,NULL),
(41,'研发创新','rtf',NULL,0,NULL),
(42,'品质保障','rtf',NULL,0,NULL),
(43,'仓储物流','rtf',NULL,0,NULL),
(44,'采购平台','rtf',NULL,0,NULL),
(45,'生产环境','rtf',NULL,0,NULL),
(46,'优质服务','rtf',NULL,0,NULL),
(47,'研发创新','rtf',NULL,0,NULL),
(48,'品质保障','rtf',NULL,0,NULL),
(49,'仓储物流','rtf',NULL,0,NULL),
(50,'采购平台','rtf',NULL,0,NULL),
(51,'关于我们','rtf',NULL,0,NULL),
(56,'招聘','rtf',NULL,0,NULL);

--
-- Dumping data for table `ow_page_text`
--

INSERT INTO `ow_page_text` (id,page_id,content)
VALUES (1,2,'<div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/014661ba-f11c-4e5c-87fb-92ff5627bb16.jpg\"/></div><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/1058d8ff-6cc0-4f42-b7d2-6f1c34ced65a.jpg\"/></div><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/3727c3b8-3868-4b2d-8fd9-6329a10cce2b.jpg\"/></div><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/20a89d5a-8b80-4fcf-a60f-69e98d0790bd.jpg\"/></div><p></p>'),(2,6,'<p class=\"media-wrap image-wrap\">新闻中心</p>'),(5,12,'<div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"https://www.muaskin.com/images/null/b0b3eec6-f482-4885-a3e8-c9416ae39af1.jpg\"/></div><p></p>'),(8,13,'<div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"https://www.muaskin.com/images/null/6504f9d5-7c12-4b72-9601-571cfb976239.jpg\"/></div><p></p>'),(9,10,'<div class=\"media-wrap image-wrap\"><img src=\"https://www.muaskin.com/images/null/c80c1f88-eb24-4c27-b5f7-b047a4499010.png\"/></div><p></p>'),(10,9,'<p style=\"text-align:left;text-indent:2em;\">2004年12月1日，中国最具成长性的上市企业之一一一广西红日股份有限公司，正式更名为索芙特股份有限公司。这标志着索芙特这一驰名的中国化妆品品牌，正以一种全新的姿态展现在世人面前。并以其稳重高速的发展态势，展示着一个时尚化妆品领先者的强大魅力。</p><p style=\"text-align:left;text-indent:2em;\">26年间，索芙特凭借差异化的营销理念在中国日化行业创造了无数的销售奇迹，从畅销中外的海藻减肥香皂到红遍天下的木瓜白肤洗面奶，从畅销十多年的防脱育发香波到众多明星代言的祛斑、瘦身系列。索芙特通过自身的努力在中国日化行业中走出了一条属于自己的路。也奠定了索芙特&quot;中国功能性化妆品第一品牌&quot;的地位。与此同时，索芙特其良好的产品品质得到了广大消费者的认同， &quot;中国驰名商标&quot;、 &quot;中国名牌&quot;、&quot;中国保护消费者权益315信用品牌&quot;等一系列的荣誉纷纷踏至而来。</p>'),(11,14,'<div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"https://www.muaskin.com/images/null/f3f58533-0ba7-4600-ada4-04800059a046.jpg\"/></div><p></p>'),(12,15,'<div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/54025e46-4693-4415-af22-cba7e72bea38.jpg\"/></div><p></p>'),(15,18,'<div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"https://www.muaskin.com/images/null/4f759eb4-cbfe-47d6-838c-417f27b09827.png\"/></div><div class=\"media-wrap image-wrap\"><img src=\"https://www.muaskin.com/images/null/0e2fd8d6-6a4e-4eab-9d87-50d8cd1d02fd.png\"/></div><p> </p>'),(16,19,NULL),(17,20,NULL),(18,21,NULL),(19,8,'<p style=\"text-align:left;\" size=\"0\" _root=\"undefined\" __ownerid=\"undefined\" __hash=\"undefined\" __altered=\"false\">11111111111111111111111111111111111111111111😇😇😇😇😇😇😇😇</p><div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/58c4d4db-19ac-424c-9e1f-b0588af9712d.jpg\"/></div><div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/58c4d4db-19ac-424c-9e1f-b0588af9712d.jpg\"/></div><p></p>'),(20,1,'<p></p>'),(21,3,'<p>服务</p>'),(22,4,'<p class=\"media-wrap image-wrap\"></p>'),(23,11,'<p><span style=\"font-size:48px\">-------------------页脚内容展示--------------</span></p>'),(24,7,'<p class=\"media-wrap image-wrap\">111111111111111111111111111111111</p>'),(25,23,'<p>111111111111111111111111111</p>'),(26,24,'<p>11111111111111111111111111111111111111111111111111</p>'),(27,25,'<p>3333333333333333333</p>'),(28,51,'<div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/5481696a-0522-4580-bda1-2d91e90f1a9d.jpg\"/></div><p></p>'),(29,52,'<p>1111111111111111111111111111</p><div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/6a324c57-76e3-48ea-9d3a-d2e80f0986ad.jpg\"/></div><p></p>'),(30,53,'<div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/3aa369cd-ac0a-43e7-83c3-ba32a34cfc0e.jpg\"/></div><p>84464564658888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888</p><div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/e205eab8-17b3-496b-8970-0e187791bf74.jpg\"/></div><p></p>'),(31,54,'<p class=\"media-wrap image-wrap\"></p><p>1122121</p><div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/bbd69e03-e9b9-4aba-b8a9-5ffcebc32e52.jpg\"/></div><p></p>'),(32,45,'<div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/f399b244-0578-472c-9180-b9b6852dd765.jpg\"/></div><div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/d0648ae8-1d25-4402-a808-a623d6c8f4f0.jpg\"/></div><p></p>'),(33,55,'<div class=\"media-wrap image-wrap\"><img src=\"https://mall.smallsaas.cn/portal/images/100000000000000001/d698ae2b-8576-406b-9e2a-52410c4a9829.jpg\"/></div><p></p>'),(34,56,'<p style=\"text-align:start;text-indent:2em;\" title=\"仓管员工作怎么样（岗位职责要求/工资待遇）\"><strong>仓管员</strong></p><p><strong>工作要求</strong></p><ul><li>工作地区：广州-白云区</li><li>工作经验：2年经验</li><li>职位类型：全职</li><li>工资待遇：<strong><span style=\"color:#ff6600\"><span style=\"font-size:16px\">¥ 3-4.5千/月</span></span></strong></li><li>学历要求：高中以上</li><li>工作地址：白云区均禾街罗岗新星工业区8号，名仁堂化妆品厂</li></ul><p><strong>岗位职责/工作内容/岗位要求</strong></p><p>1、服从领导安排，遵守公司和仓库各项规章制度。<br/><br/>2、负责仓库日常收、发、存管理工作，努力达成帐、卡、单、物一致，使在库原材料和成品处于良好的品质状态。<br/><br/>3、对照生产领料出库单，按照先进先出原则发料。<br/><br/>4、按照采购入库通知单的数量进行收料<br/><br/>5、物料进入仓库管理，库位的筹划与正确合理的摆放。<br/><br/>6、仓库的安全工作和原材料及成品保管工作。<br/><br/>7、每日原材料明细账目的登记和对车间入库成品进行点数。<br/><br/>8、负责盘点库存原材料和成品。<br/></p><h1 style=\"text-align:start;text-indent:2em;\" title=\"品管员工作怎么样（岗位职责要求/工资待遇）\"><strong>品管员</strong></h1><p style=\"text-align:start;text-indent:2em;\"></p><p><strong>工作要求</strong></p><ul><li>工作地区：广州-白云区</li><li>工作经验：1年经验</li><li>职位类型：全职</li><li>工资待遇：<strong><span style=\"color:#ff6600\"><span style=\"font-size:16px\">¥ 3-4.5千/月</span></span></strong></li><li>学历要求：高中以上</li><li>工作地址：白云区均禾街罗岗新星工业区8号，名仁堂化妆品厂</li></ul><p><strong>岗位职责/工作内容/岗位要求</strong></p><p>1.负责生产现场的质量监督、检查、分析、改善和计量管理，控制和预防质量问题的发生；<br/>2.严格监督、执行公司各类质量标准，确保及提升产品质量，营造持续改进品质的质量文化；<br/>3.坚持以辅助、指导生产为主的质量管理理念，通过过硬的品检人员业务能力来保障产品质量，控制制程错误、减少损耗、降低生产成本</p>');
