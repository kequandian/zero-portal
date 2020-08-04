SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `ow_menu`;
CREATE TABLE `ow_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) DEFAULT NULL COMMENT '上级菜单',
  `org_id` bigint(20) DEFAULT  NULL  COMMENT '用于隔离的组织id, 由crud-plus维护',
  `org_tag` varchar (100) DEFAULT NULL COMMENT '用于隔离的组织标识, 参考 docker而定',
  `name` varchar(50) NOT NULL COMMENT '菜单名',
	`page_id` bigint(20) DEFAULT NULL COMMENT '页面Id',
	`constant` smallint(6) DEFAULT 0 COMMENT '是否不可修改',
	`display` smallint(6) DEFAULT 1 COMMENT '是否显示',
	`seq` smallint(6) DEFAULT 0 NOT NULL COMMENT '排序号',
	`note` varchar(50) DEFAULT NULL COMMENT '备注',
	`lowest` smallint(6) DEFAULT 1 COMMENT '是否为最下级',
	`identifier` VARCHAR(50) DEFAULT NULL COMMENT '唯一标识(一级菜单)',
	`cover` varchar(255) DEFAULT NULL COMMENT '图片url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate utf8mb4_unicode_ci;


-- 富文本页面
DROP TABLE IF EXISTS `ow_page_text`;
CREATE TABLE `ow_page_text` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `org_id` bigint(20) DEFAULT  NULL  COMMENT '用于隔离的组织id, 由crud-plus维护',
  `org_tag` varchar (100) DEFAULT NULL COMMENT '用于隔离的组织标识, 参考 docker而定',
  `page_id` bigint(20) DEFAULT NULL COMMENT '所属页id',
  `content` text DEFAULT NULL COMMENT '文本内容',
  PRIMARY KEY (`id`),
  UNIQUE KEY `page_id` (`page_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate utf8mb4_unicode_ci;

-- 页面
DROP TABLE IF EXISTS `ow_page`;
CREATE TABLE `ow_page` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `org_id` bigint(20) DEFAULT  NULL  COMMENT '用于隔离的组织id, 由crud-plus维护',
  `org_tag` varchar (100) DEFAULT NULL COMMENT '用于隔离的组织标识, 参考 docker而定',
  `name` varchar(50) DEFAULT NULL COMMENT '页面名称',
  `type` varchar(50) DEFAULT 'rtf' COMMENT '页面类型[HTML,RTF]',
	`url` varchar(255) DEFAULT NULL COMMENT '页面url',
	`constant` smallint(6) DEFAULT 0 COMMENT '页面是否不可修改',
	`identifier` VARCHAR(50) DEFAULT NULL COMMENT '唯一标识',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate utf8mb4_unicode_ci;




-- ----------------------------
-- Table structure for ow_page_carousel
-- ----------------------------
DROP TABLE IF EXISTS `ow_page_carousel`;
CREATE TABLE `ow_page_carousel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `page_id` bigint(20) DEFAULT NULL COMMENT '所属页id',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '图片url',
  `display` smallint(6) DEFAULT '1' COMMENT '是否展示',
  `seq` smallint(6) DEFAULT '0' COMMENT '排序号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for ow_page_image
-- ----------------------------
DROP TABLE IF EXISTS `ow_page_image`;
CREATE TABLE `ow_page_image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `page_id` bigint(20) DEFAULT NULL COMMENT '所属页id',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '图片url',
  `carousel` smallint(6) NOT NULL DEFAULT '0' COMMENT '是否为轮播图',
  `target_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '链接页面url',
  `target_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '链接页面名',
  `target_blank` smallint(6) DEFAULT '0' COMMENT '是否打开新标签页显示',
  `display` smallint(6) DEFAULT '1' COMMENT '是否展示',
  `seq` smallint(6) DEFAULT '0' COMMENT '排序号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



DROP TABLE IF EXISTS `sb_system_config`;
create table `sb_system_config`(
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `data_key` varchar(50) NOT NULL,
  `data_value` varchar(50) NOT NULL,
   PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate utf8mb4_unicode_ci;


-- ----------------------------
-- Table structure for perm_group
-- ----------------------------
DROP TABLE IF EXISTS `perm_group`;
CREATE TABLE `perm_group` (
  `id` bigint(20) NOT NULL,
  `identifier` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for perm
-- ----------------------------
DROP TABLE IF EXISTS `perm`;
CREATE TABLE `perm` (
  `id` bigint(20) NOT NULL,
  `groupid` bigint(20) DEFAULT NULL,
  `identifier` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `groupid` (`groupid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `tenant_id` bigint(20) NOT NULL,
  `num` int(11) DEFAULT NULL,
  `pid` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tips` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `delete_flag` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for role_perm
-- ----------------------------
DROP TABLE IF EXISTS `role_perm`;
CREATE TABLE `role_perm` (
  `id` bigint(20) NOT NULL,
  `permid` bigint(20) DEFAULT NULL,
  `roleid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleid` (`roleid`),
  KEY `permid` (`permid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



DROP TABLE IF EXISTS `t_config_global`;
CREATE TABLE `t_config_global` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `lang` varchar(8) NOT NULL COMMENT '选定的语言',
  `selected` smallint DEFAULT 0 COMMENT '选定的语言',
  UNIQUE(lang),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- field config --

DROP TABLE IF EXISTS `t_config_field_group`;
CREATE TABLE `t_config_field_group` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) DEFAULT NULL COMMENT '上级分组id',
  `lang` varchar(8) DEFAULT NULL COMMENT '区分语言',
  `name` varchar(26) NOT NULL COMMENT '分组名称',
  `comment` text DEFAULT NULL COMMENT '分组描述',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `type` varchar(26) DEFAULT NULL COMMENT '类型(区分不同分组)',
  UNIQUE(lang,name,type),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `t_config_field`;
CREATE TABLE `t_config_field` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `field` varchar(100) NOT NULL COMMENT '领域',
  `group_id` bigint(20) NOT NULL COMMENT '所属分组',
  `lang` varchar(8) DEFAULT NULL COMMENT '区分语言',
  `name` varchar(26) NOT NULL COMMENT '配置名称',
  `value` text DEFAULT NULL COMMENT '值',
  `data_type` varchar(26) DEFAULT NULL COMMENT '值类型',
  `description` text DEFAULT NULL COMMENT '配置描述',
  UNIQUE(field,lang),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `t_config_field_item`;
CREATE TABLE `t_config_field_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `field` varchar(100) NOT NULL COMMENT '领域',
  `lang` varchar(8) DEFAULT NULL COMMENT '区分语言',
  `name` varchar(26) DEFAULT NULL COMMENT '独立语言名称',
  `value` text DEFAULT NULL COMMENT '值',
  UNIQUE(lang,name),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(26) NOT NULL COMMENT '类型ID',
  `category_id` BIGINT(20) NOT NULL DEFAULT '0' COMMENT '类别ID',
  `user_id` BIGINT(20) NOT NULL COMMENT '用户ID',
  `title` VARCHAR(255) NOT NULL COMMENT '标题',
  `sub_title` VARCHAR(255) default NULL COMMENT '章节数',
  `sub_head` VARCHAR(255) default NULL COMMENT '原文',
  `summary` text default NULL COMMENT '内容摘要',
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `sticky` INT(11) NOT NULL DEFAULT '0' COMMENT '1置顶,0不置顶',
  `display` INT(11) NOT NULL DEFAULT '1' COMMENT '是否显示，1显示',
  `recommended` INT(11) NOT NULL DEFAULT '0' COMMENT '1精华帖,0普通帖',
  `visit_count` INT(11) NOT NULL DEFAULT '0' COMMENT '阅读量',
  `like_count` INT(11) NOT NULL DEFAULT '0' COMMENT '点赞数量',
  `favorite_count` INT(11) NOT NULL DEFAULT '0' COMMENT '收藏数量',
  `status` VARCHAR(50) NOT NULL DEFAULT 'Draft' COMMENT '状态:Draft-草稿，Published-发布',
   `author` VARCHAR(50)  not null COMMENT '作者',
   `cover` VARCHAR(255)  default null COMMENT '封面',
   `update_time` datetime default NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `article_product_relation`;
CREATE TABLE `article_product_relation` (
  `article_id` BIGINT(20) NOT NULL COMMENT '资讯ID',
  `target_id` BIGINT(20) NOT NULL COMMENT '产品ID',
  `target_type` varchar(26) NOT NULL COMMENT '类型',
  unique(`article_id`,`target_id`,`target_type`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- ----------------------------
-- Table structure for article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_category`;
CREATE TABLE `article_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `type_id` BIGINT(20) NOT NULL COMMENT '类别ID',
  `name` VARCHAR(255) NOT NULL COMMENT '类别名称',
  `cover` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '图片',
  `allow_image` INT(11) NOT NULL DEFAULT '1' COMMENT '允许上传图片',
  `fast_entry` INT(11) NOT NULL DEFAULT '0' COMMENT '快速入口标记',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for article_content
-- ----------------------------
DROP TABLE IF EXISTS `article_content`;
CREATE TABLE `article_content` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `article_id` BIGINT(20) NOT NULL COMMENT '文章ID',
  `content` TEXT NOT NULL COMMENT '内容',
  unique(`article_id`),
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for article_image
-- ----------------------------
DROP TABLE IF EXISTS `article_image`;
CREATE TABLE `article_image` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `article_id` BIGINT(20) NOT NULL COMMENT '文章ID',
  `url` VARCHAR(255) NOT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for article_type
-- ----------------------------
DROP TABLE IF EXISTS `article_type`;
CREATE TABLE `article_type` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `identifier` BIGINT(20) NOT NULL COMMENT '类别id',
  `name` VARCHAR(255) NOT NULL COMMENT '类别名称',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_stock_evaluation
-- ----------------------------
DROP TABLE IF EXISTS `t_stock_evaluation`;
CREATE TABLE `t_stock_evaluation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `stock_id` bigint(20) NOT NULL COMMENT '评价对象ID',
  `member_id` bigint(20) NOT NULL COMMENT '用户id',
  `member_name` varchar(50) default null COMMENT '用户昵称',
  `stock_type` varchar(26) NOT NULL COMMENT '评价对象类型 评价为 商品/订单/其他',
  `origin_id` bigint(20) NOT NULL COMMENT '评价最上层父节点id',
  `origin_type` varchar(26) NOT NULL COMMENT '评价最上层节点type',
  `content` text default NULL COMMENT '评价信息',
  `is_display` smallint default '1' COMMENT '默认显示',
  `is_stick` smallint default '0' COMMENT '是否置顶 默认不置顶',
  `status` varchar(26) default null COMMENT '状态',
  `stock_tag` varchar(50) default null COMMENT '选填多层嵌套索引',
  `trade_number`  varchar(26) DEFAULT NULL COMMENT '订单编号',
  `trade_time`  datetime default null COMMENT '下单时间',
  `create_time` timestamp not null default current_timestamp COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_stock_evaluation_addition
-- ----------------------------
DROP TABLE IF EXISTS `t_stock_evaluation_addition`;
CREATE TABLE `t_stock_evaluation_addition` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `evaluate_id` BIGINT(20) NOT NULL COMMENT '外键',
  `note` TEXT NOT NULL COMMENT '评价信息',
  `status` VARCHAR(26) DEFAULT NULL COMMENT '状态',
  `is_display` SMALLINT(6) DEFAULT '1' COMMENT '默认显示',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_stock_evaluation_image
-- ----------------------------
DROP TABLE IF EXISTS `t_stock_evaluation_image`;
CREATE TABLE `t_stock_evaluation_image` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `evaluate_id` BIGINT(20) DEFAULT NULL COMMENT '外键',
  `url` VARCHAR(255) DEFAULT NULL COMMENT '图片',
  `status` VARCHAR(26) DEFAULT NULL COMMENT '状态',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `evaluation_addition_id` BIGINT(20) DEFAULT NULL COMMENT '外键',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_stock_evaluation_star
-- ----------------------------
DROP TABLE IF EXISTS `t_stock_evaluation_star`;
CREATE TABLE `t_stock_evaluation_star` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `evaluate_id` BIGINT(20) NOT NULL COMMENT '外键',
  `star_name` VARCHAR(255) DEFAULT NULL COMMENT '星级名称',
  `star_value` SMALLINT(6) DEFAULT NULL COMMENT '星级值',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_stock_favorite
-- ----------------------------
DROP TABLE IF EXISTS `t_stock_favorite`;
CREATE TABLE `t_stock_favorite` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `member_id` BIGINT(20) NOT NULL COMMENT '用户ID',
  `member_name` BIGINT(20) NOT NULL COMMENT '用户ID',
  `stock_id` BIGINT(20) NOT NULL COMMENT '收藏对象ID',
  `stock_name` BIGINT(20) NOT NULL COMMENT '收藏对象',
  `stock_type` VARCHAR(20) NOT NULL COMMENT '收藏类型类型',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '收藏时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY(`member_id`,`stock_id`,`stock_type`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_stock_flower
-- ----------------------------
DROP TABLE IF EXISTS `t_stock_flower`;
CREATE TABLE `t_stock_flower` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `member_id` BIGINT(20) NOT NULL COMMENT '用户ID',
  `member_name` VARCHAR(20) NOT NULL COMMENT '点赞用户',
  `stock_id` BIGINT(20) NOT NULL COMMENT '点赞对象ID',
  `stock_name` BIGINT(20) NOT NULL COMMENT '点赞对象对象',
  `stock_type` VARCHAR(20) NOT NULL COMMENT '点赞对象类型',
  `flower_count` INT(11) DEFAULT '0' COMMENT '点赞次数',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '点赞时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY (`member_id`,`stock_id`,`stock_type`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- sys_org
DROP TABLE IF EXISTS `t_sys_org`;
CREATE TABLE `t_sys_org` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `pid` bigint(20) default NULL COMMENT '父部门id',
  `name` varchar(60) NOT NULL COMMENT '部门名称',
  `org_code` varchar(50) DEFAULT NULL COMMENT '部门编号',
  `full_name` varchar(128) DEFAULT NULL COMMENT '部门全称',
  `node_level` int(11) NOT NULL DEFAULT 0 COMMENT '所在层级 (0,1,2)',
  `left_num` int(11) NOT NULL default 1 COMMENT '左下标',
  `right_num` int(11) NOT NULL default 2 COMMENT '右下标',
  `note` text DEFAULT NULL COMMENT '部门描述',
  `status` varchar(26) NOT NULL default 'NORMAL' COMMENT '状态',
  `org_type` smallint NOT NULL default 0 COMMENT '默认 org_type = 1 时信息为租户，非租户 org_type = 0 ,platform org_type = 2',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE(`pid`,`name`),
  UNIQUE(`org_code`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for t_sys_position
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_position`;
CREATE TABLE `t_sys_position` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '职位名称',
  `pos_code` varchar(20) NOT NULL COMMENT '职位代码',
  `org_id` bigint(20) NOT NULL COMMENT '职位所属部门id',
  `note` text COMMENT '职位描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for t_org_user_relation
-- ----------------------------
DROP TABLE IF EXISTS `t_org_user_relation`;
CREATE TABLE `t_org_user_relation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `user_id` bigint(20) NOT NULL COMMENT '员工ID',
  `org_position` varchar(100) NOT NULL COMMENT '职位(职称)',
  `org_id` bigint(20) NOT NULL COMMENT '组织id',
  `position_id` bigint(20) NOT NULL COMMENT '职位id',
  `is_leader` smallint(6) NOT NULL DEFAULT '0' COMMENT '是否是管理员',
  `is_primary` smallint(6) NOT NULL DEFAULT '0' COMMENT '是否为主要的',
  PRIMARY KEY (`id`),
  UNIQUE KEY (`user_id`,`org_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;




DROP TABLE IF EXISTS `t_stock_images`;
CREATE TABLE `t_stock_images` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL COMMENT 'images address',
  `stock_id` BIGINT(20) NOT NULL COMMENT 'owner id',
  `stock_type` varchar(20) NOT NULL COMMENT 'owner type:like product/member and etc...',
  `name` varchar(100) DEFAULT NULL COMMENT 'owner type:like product/member and etc...',
  `image_note` varchar(255) DEFAULT NULL COMMENT 'owner type:like product/member and etc...',
  `is_primary` smallint(5) default 0 COMMENT 'is primary,0 means not ,1 means primary ',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'upload time',
  UNIQUE(`url`,`stock_id`,`stock_type`),
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `meta_entity_patch_machine`;
CREATE TABLE `meta_entity_patch_machine` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `entity` varchar(64) NOT NULL COMMENT '实体',
  `entity_table_name` varchar(64) NOT NULL COMMENT '实体对应表名',
  `entity_field_name` varchar(64) NOT NULL COMMENT '实体字段名',
  `entity_field_type` varchar(16) NOT NULL DEFAULT 'STRING' COMMENT '实体字段类型',
  `number_range_min` bigint(20) DEFAULT NULL COMMENT '数字类型字段的范围下限',
  `number_range_max` bigint(20) DEFAULT NULL COMMENT '数字类型字段的范围上限',
  `permission` varchar(64) DEFAULT NULL COMMENT '操作权限控制',
  PRIMARY KEY (`id`),
  UNIQUE KEY `entity` (`entity`,`entity_field_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;





DROP TABLE IF EXISTS `t_operation_log`;
CREATE TABLE `t_operation_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `org_id` bigint(20) DEFAULT '0' COMMENT '组织id',
  `log_type` varchar(50) DEFAULT NULL COMMENT '日志类型',
  `log_name` varchar(200) DEFAULT NULL COMMENT '日志名称',
  `user_id` bigint(20) DEFAULT NULL COMMENT '操作用户ID',
  `user_name` varchar(200) DEFAULT NULL COMMENT '操作用户名称',
  `target_id` bigint(20) DEFAULT NULL COMMENT '[未知]',
  `target_type` varchar(50) DEFAULT NULL COMMENT '[未知]',
  `class_name` varchar(200) DEFAULT NULL COMMENT '操作类名称',
  `method` varchar(200) DEFAULT NULL COMMENT '操作方法名称',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '日志创建时间',
  `result` varchar(200) DEFAULT NULL COMMENT '操作结果',
  `message` text COMMENT '附带信息',
  `module` VARCHAR(100) DEFAULT NULL COMMENT '模块',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




-- ----------------------------
-- Table structure for t_ad
-- ----------------------------
DROP TABLE IF EXISTS `t_ad`;
CREATE TABLE `t_ad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` bigint(20) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `enabled` smallint(5) NOT NULL DEFAULT '1',
  `target_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seq` smallint(6) DEFAULT '0' COMMENT '排序号',
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_ad_group
-- ----------------------------
DROP TABLE IF EXISTS `t_ad_group`;
CREATE TABLE `t_ad_group` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identifier` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '广告组标识',
  PRIMARY KEY (`id`),
  UNIQUE KEY `identifier` (`identifier`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_ad_library
-- ----------------------------
DROP TABLE IF EXISTS `t_ad_library`;
CREATE TABLE `t_ad_library` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8;



-- ----------------------------
-- Table structure for t_config
-- ----------------------------
DROP TABLE IF EXISTS `t_config`;
CREATE TABLE `t_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `key_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value_type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `visible` int(11) DEFAULT NULL,
  `description` varchar(225) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `readonly` int(11) DEFAULT '0',
  org_id bigint(20) default null comment 'org_id',
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for t_config_group
-- ----------------------------
DROP TABLE IF EXISTS `t_config_group`;
CREATE TABLE `t_config_group` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) DEFAULT NULL COMMENT '上级分组id',
  `lang` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '区分语言',
  `name` varchar(26) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '分组名称',
  `comment` mediumtext COLLATE utf8mb4_unicode_ci COMMENT '分组描述',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `type` varchar(26) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型(区分不同分组)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `lang` (`lang`,`name`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
