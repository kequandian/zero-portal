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

DROP TABLE IF EXISTS `sb_system_config`;
create table `sb_system_config`(
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `data_key` varchar(50) NOT NULL,
  `data_value` varchar(50) NOT NULL,
   PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate utf8mb4_unicode_ci;

#DROP TABLE IF EXISTS `perm`;
#CREATE TABLE `perm` (
#  `id` bigint(20) NOT NULL,
#  `groupid` bigint(20) DEFAULT NULL,
#  `identifier` varchar(50) NOT NULL,
#  `name` varchar(50) DEFAULT NULL,
#  PRIMARY KEY (`id`),
#  KEY `groupid` (`groupid`),
#  CONSTRAINT `perm_ibfk_1` FOREIGN KEY (`groupid`) REFERENCES `perm_group` (`id`) ON DELETE CASCADE
#) ENGINE=InnoDB DEFAULT CHARSET=utf8

#DROP TABLE IF EXISTS `perm_group`;
#CREATE TABLE `perm_group` (
#  `id` bigint(20) NOT NULL,
#  `identifier` varchar(50) NOT NULL,
#  `name` varchar(50) DEFAULT NULL,
#  PRIMARY KEY (`id`)
#) ENGINE=InnoDB DEFAULT CHARSET=utf8





