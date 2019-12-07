package com.jfeat.am.module.ow.api.crud;


import com.baomidou.mybatisplus.plugins.Page;
import com.jfeat.am.core.jwt.JWTKit;
import com.jfeat.am.module.cms.services.definition.ArticleType;
import com.jfeat.am.module.cms.services.domain.dao.QueryArticleDao;
import com.jfeat.am.module.cms.services.domain.model.ArticleModel;
import com.jfeat.am.module.cms.services.domain.model.record.ArticleRecord;
import com.jfeat.am.module.cms.services.domain.service.CMSArticleService;
import com.jfeat.am.module.log.annotation.BusinessLog;
import com.jfeat.am.module.notification.services.crud.service.SubscriptionService;
import com.jfeat.crud.base.exception.BusinessCode;
import com.jfeat.crud.base.exception.BusinessException;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import com.jfeat.images.services.domain.service.StockImagesService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@Api("网站美丽知识，潮流资讯")
@RequestMapping("/api")
public class CMSWebsiteInfEndpoint  {


    @Resource
    CMSArticleService articleService;
    @Resource
    SubscriptionService subscriptionService;
    @Resource
    QueryArticleDao queryArticleDao;
    @Resource
    StockImagesService stockImagesService;

    @BusinessLog(name = "website-lore", value = "create website-lore")
    @PostMapping("/cms/website/lore")
    @ApiOperation("新美丽知识")
    public Tip createLore(@RequestBody ArticleModel entity) {
        Integer affected = 0;
        entity.setContent("美丽知识");
        Long userId = JWTKit.getUserId();
        // author由gw传入
        if(entity.getAuthor() == null || ("").equals(entity.getAuthor())) {
            entity.setAuthor(JWTKit.getAccount());
        }
        entity.setType(ArticleType.LORE.toString());
        entity.setUserId(userId);
        try {
            articleService.createArticle(entity);

        } catch (DuplicateKeyException e) {
            throw new BusinessException(BusinessCode.DuplicateKey);
        }

        return SuccessTip.create(affected);
    }

    @BusinessLog(name = "website-lore", value = "create website-lore")
    @PostMapping("/cms/website/fashion")
    @ApiOperation("新潮流资讯")
    public Tip createFashion(@RequestBody ArticleModel entity) {
        Integer affected = 0;
        entity.setContent("潮流资讯");
        Long userId = JWTKit.getUserId();
        // author由gw传入
        if(entity.getAuthor() == null || ("").equals(entity.getAuthor())) {
            entity.setAuthor(JWTKit.getAccount());
        }
        entity.setType(ArticleType.FASHION.toString());



        entity.setUserId(userId);
        try {
            articleService.createArticle(entity);

        } catch (DuplicateKeyException e) {
            throw new BusinessException(BusinessCode.DuplicateKey);
        }

        return SuccessTip.create(affected);
    }

    @GetMapping("/pub/website/info")
    @ApiOperation("根据type查看是美丽知识还是潮流资讯")
    public Tip queryArticles(Page<ArticleRecord> page,
                             @RequestParam(name = "pageNum", required = false, defaultValue = "1") Integer pageNum,
                             @RequestParam(name = "pageSize", required = false, defaultValue = "10") Integer pageSize,
                             @RequestParam(name = "id", required = false) Long id,
                             @RequestParam(name = "type", required = false) String type,
                             @RequestParam(name = "categoryId", required = false) Long categoryId,
                             @RequestParam(name = "userId", required = false) Long userId,
                             @RequestParam(name = "title", required = false) String title,
                             @RequestParam(name = "subTitle", required = false) String subTitle,
                             @RequestParam(name = "subHead", required = false) String subHead,
                             @RequestParam(name = "summary", required = false) String summary,
                             @RequestParam(name = "createdTime", required = false) Date createdTime,
                             @RequestParam(name = "sticky", required = false) Integer sticky,
                             @RequestParam(name = "recommended", required = false) Integer recommended,
                             @RequestParam(name = "visitCount", required = false) Integer visitCount,
                             @RequestParam(name = "likeCount", required = false) Integer likeCount,
                             @RequestParam(name = "favoriteCount", required = false) Integer favoriteCount,
                             @RequestParam(name = "status", required = false) String status,
                             @RequestParam(name = "orderBy", required = false) String orderBy,
                             @RequestParam(name = "sort", required = false) String sort,
                             @RequestParam(name = "isOwner", required = false, defaultValue = "0")Integer isOwner ) {
        if (orderBy != null && orderBy.length() > 0) {
            if (sort != null && sort.length() > 0) {
                String pattern = "(ASC|DESC|asc|desc)";
                if (!sort.matches(pattern)) {
                    throw new BusinessException(BusinessCode.BadRequest.getCode(), "sort must be ASC or DESC");//此处异常类型根据实际情况而定
                }
            } else {
                sort = "ASC";
            }
            orderBy = "`" + orderBy + "`" + " " + sort;
        }
        page.setCurrent(pageNum);
        page.setSize(pageSize);

        ArticleRecord record = new ArticleRecord();
        record.setId(id);
        record.setType(type);
        record.setCategoryId(categoryId);
        record.setUserId(userId);
        record.setTitle(title);
        record.setSubTitle(subTitle);
        record.setSubHead(subHead);
        record.setSummary(summary);
        record.setCreatedTime(createdTime);
        record.setSticky(sticky);
        record.setRecommended(recommended);
        record.setVisitCount(visitCount);
        record.setLikeCount(likeCount);
        record.setFavoriteCount(favoriteCount);
        record.setStatus(status);

        page.setRecords(queryArticleDao.findArticlePage(page, record, null, orderBy));

        return SuccessTip.create(page);
    }

    @GetMapping("/pub/stock/images/owner")
    @ApiOperation("根据type查看是美丽知识还是潮流资讯")
    public Tip findOwnerImages(@RequestParam(value="ownerId") Long ownerId,
                               @RequestParam(value="ownerType", required = false) String ownerType) {
        return SuccessTip.create(stockImagesService.findOwnerImages(ownerId, ownerType));
    }


}
