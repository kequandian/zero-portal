package com.jfeat.am.module.ow.services.persistence.model;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author Code Generator
 * @since 2018-12-01
 */
@TableName("ow_page")
public class Page extends Model<Page> {

    private static final long serialVersionUID = 1L;

	@TableId(value="id", type= IdType.AUTO)
	private Long id;
	/**
	 * 用于隔离的组织id, 由crud-plus维护
	 */
	@TableField("org_id")
	private  Long orgId;
	/**
	 * 用于隔离的组织标识, 参考 docker而定
	 */
	@TableField("org_tag")
	private String orgTag;
    /**
     * 页面名称
     */
	private String name;
    /**
     * 页面类型[HTML,RTF]
     */
	private String type;
    /**
     * 页面url
     */
	private String url;

	/**
	 * 唯一标识
	 **/
	private String identifier;

	private Integer constant;

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public Integer getConstant() {
		return constant;
	}

	public void setConstant(Integer constant) {
		this.constant = constant;
	}

	public Long getId() {
		return id;
	}

	public Page setId(Long id) {
		this.id = id;
		return this;
	}

	public Long getOrgId() {
		return orgId;
	}

	public void setOrgId(Long orgId) {
		this.orgId = orgId;
	}

	public String getOrgTag() {
		return orgTag;
	}

	public void setOrgTag(String orgTag) {
		this.orgTag = orgTag;
	}

	public String getName() {
		return name;
	}

	public Page setName(String name) {
		this.name = name;
		return this;
	}

	public String getType() {
		return type;
	}

	public Page setType(String type) {
		this.type = type;
		return this;
	}

	public String getUrl() {
		return url;
	}

	public Page setUrl(String url) {
		this.url = url;
		return this;
	}


	public static final String ID = "id";

	public static final String ORG_ID = "org_id";

	public static final String ORG_TAG = "org_tag";

	public static final String NAME = "name";

	public static final String TYPE = "type";

	public static final String URL = "url";

	public static final String SEQ = "seq";

	public static final String CONSTANT = "constant";

	@Override
	protected Serializable pkVal() {
		return this.id;
	}

}
