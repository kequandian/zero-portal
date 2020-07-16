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
@TableName("ow_page_text")
public class PageText extends Model<PageText> {

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
     * 所属页id
     */
	@TableField("page_id")
	private Long pageId;
    /**
     * 文本内容
     */
	private String content;


	public Long getId() {
		return id;
	}

	public PageText setId(Long id) {
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

	public Long getPageId() {
		return pageId;
	}

	public PageText setPageId(Long pageId) {
		this.pageId = pageId;
		return this;
	}

	public String getContent() {
		return content;
	}

	public PageText setContent(String content) {
		this.content = content;
		return this;
	}

	public static final String ID = "id";

	public static final String ORG_ID = "org_id";

	public static final String ORG_TAG = "org_tag";

	public static final String PAGE_ID = "page_id";

	public static final String CONTENT = "content";

	@Override
	protected Serializable pkVal() {
		return this.id;
	}

	@Override
	public String toString() {
		return "PageText{" +
			"id=" + id +
			", pageId=" + pageId +
			", content=" + content +
			"}";
	}
}
