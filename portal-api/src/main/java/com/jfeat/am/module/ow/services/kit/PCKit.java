package com.jfeat.am.module.ow.services.kit;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jfeat.am.module.ow.services.definite.RootMenu;
import com.jfeat.am.module.ow.services.domain.model.record.MenuRecord;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import org.apache.commons.collections.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by zy on 2018/12/1.
 * url: /rest/product_category
 * request demo: {"status_code":0,"data":[{"cover":"http://120.79.77.207:8080/images/p/bc5aa569e5a2836f1da0f0c3e84f28f9.jpeg","sub_categories":[],"visible":1,"wholesale":0,"parent_id":null,"is_show_products":1,"name":"美容美颜","description":null,"id":2,"promoted":1,"sort_order":100,"promoted_product_count":3},{"cover":null,"sub_categories":[],"visible":1,"wholesale":0,"parent_id":null,"is_show_products":1,"name":"肌肤类型","description":null,"id":3,"promoted":1,"sort_order":100,"promoted_product_count":3},{"cover":null,"sub_categories":[{"cover":"http://120.79.77.207:8080/images/p/720a88c2f56d279834313d4dafdd5430.jpeg","sub_categories":[],"visible":1,"wholesale":0,"parent_id":4,"is_show_products":1,"name":"补水保湿","description":"深度补水保湿，唤醒你的肌肤","id":6,"promoted":1,"sort_order":100,"promoted_product_count":1}],"visible":1,"wholesale":0,"parent_id":null,"is_show_products":1,"name":"补水系列","description":null,"id":4,"promoted":0,"sort_order":100,"promoted_product_count":3},{"cover":null,"sub_categories":[],"visible":1,"wholesale":0,"parent_id":null,"is_show_products":1,"name":"特殊护理","description":null,"id":5,"promoted":1,"sort_order":100,"promoted_product_count":3}]}
 */
@Deprecated
public class PCKit {
    protected final static Logger logger = LoggerFactory.getLogger(PCKit.class);

    private static final String PC_API = "/rest/product_category";
    public static void main(String[] args) {
        MenuRecord record = new MenuRecord();
        record.setId(RootMenu.PRODUCT.getId());

        initProductCategorysMenu(record, "http://120.79.77.207:8080");
    }

    public static void initProductCategorysMenu(MenuRecord topMenu, String baseUrl) {
        if(RootMenu.PRODUCT.getId().equals(topMenu.getId())) {
            if(topMenu.getItems() == null) {
                topMenu.setItems(new ArrayList<>());
            }
            List<Menu> subMenus = topMenu.getItems();
            List<ProductCategory> categorys = getProductCategorys(baseUrl);
            for(ProductCategory category : categorys) {
                Menu subMenu = new Menu();
                subMenu.setName(category.getName());
                subMenu.setPid(RootMenu.PRODUCT.getId());
                subMenu.setConstant(1);
                subMenus.add(subMenu);
            }
        }
    }

    private static List<ProductCategory> getProductCategorys(String baseUrl) {
        String res = HttpKit.sendGet(baseUrl + PC_API, new HashedMap());
        JSONObject resObj = JSONObject.parseObject(res);
        List<ProductCategory> result = new ArrayList<>();
        if(resObj != null && resObj.getInteger("status_code") != null && resObj.getInteger("status_code") == 0) {
            if(resObj.getJSONArray("data") != null) {
                addLowestCategorys(result, resObj.getJSONArray("data"));
            }
        }
        return result;
    }

    private static void addLowestCategorys(List<ProductCategory> categories, JSONArray arr) {
        if(categories == null || arr == null) {
            return;
        }
        for(int i = 0; i < arr.size(); i++) {
            if(arr.getJSONObject(i).getJSONArray("sub_categories") == null ||
                    arr.getJSONObject(i).getJSONArray("sub_categories").isEmpty()) {
                categories.add(arr.getJSONObject(i).toJavaObject(ProductCategory.class));
            } else {
                addLowestCategorys(categories, arr.getJSONObject(i).getJSONArray("sub_categories"));
            }
        }
    }

    private static class ProductCategory {
        private String name;
        private Long id;
        private Integer visible;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public Integer getVisible() {
            return visible;
        }

        public void setVisible(Integer visible) {
            this.visible = visible;
        }
    }
}
