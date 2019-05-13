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
@TableName("ow_menu")
public class Menu extends Model<Menu> {

    private static final long serialVersionUID = 1L;

	@TableId(value="id", type= IdType.AUTO)
	private Long id;
    /**
     * 上级菜单
     */
	private Long pid;
    /**
     * 菜单名
     */
	private String name;
    /**
     * 页面Id
     */
	@TableField("page_id")
	private Long pageId;
    /**
     * 是否可以删除
     */
	private Integer constant;
    /**
     * 排序号
     */
	private Integer seq;
    /**
     * 备注
     */
	private String note;

	/**
	 * 是否为最下级
	 */
	private Integer lowest;

	/**
	 * 是否可以显示
	 */
	private Integer display;
	/**
	 * 唯一标识(一级菜单)
	 **/
	private String identifier;
	private String cover;

	public String getCover() {
		return cover;
	}

	public void setCover(String cover) {
		this.cover = cover;
	}

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public Integer getLowest() {
		return lowest;
	}

	public void setLowest(Integer lowest) {
		this.lowest = lowest;
	}

	public Integer getDisplay() {
		return display;
	}

	public void setDisplay(Integer display) {
		this.display = display;
	}

	public Long getId() {
		return id;
	}

	public Menu setId(Long id) {
		this.id = id;
		return this;
	}

	public Long getPid() {
		return pid;
	}

	public Menu setPid(Long pid) {
		this.pid = pid;
		return this;
	}

	public String getName() {
		return name;
	}

	public Menu setName(String name) {
		this.name = name;
		return this;
	}

	public Long getPageId() {
		return pageId;
	}

	public Menu setPageId(Long pageId) {
		this.pageId = pageId;
		return this;
	}

	public Integer getConstant() {
		return constant;
	}

	public void setConstant(Integer constant) {
		this.constant = constant;
	}


	public Integer getSeq() {
		return seq;
	}

	public Menu setSeq(Integer seq) {
		this.seq = seq;
		return this;
	}

	public String getNote() {
		return note;
	}

	public Menu setNote(String note) {
		this.note = note;
		return this;
	}

	public static final String ID = "id";

	public static final String PID = "pid";

	public static final String NAME = "name";

	public static final String PAGE_ID = "page_id";

	public static final String CONSTANT = "constant";

	public static final String STATUS = "status";

	public static final String SEQ = "seq";

	public static final String NOTE = "note";

	@Override
	protected Serializable pkVal() {
		return this.id;
	}

}
