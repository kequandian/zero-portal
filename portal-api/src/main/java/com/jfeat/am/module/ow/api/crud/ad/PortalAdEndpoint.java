package com.jfeat.am.module.ow.api.crud.ad;

import com.baomidou.mybatisplus.plugins.Page;
import com.jfeat.am.module.advertisement.services.domain.dao.QueryAdLibraryDao;
import com.jfeat.am.module.advertisement.services.domain.model.record.AdLibraryRecord;
import com.jfeat.am.module.advertisement.services.domain.model.record.AdRecord;
import com.jfeat.am.module.advertisement.services.persistence.dao.AdGroupMapper;
import com.jfeat.am.module.advertisement.services.persistence.model.Ad;
import com.jfeat.am.module.advertisement.services.persistence.model.AdGroup;
import com.jfeat.am.module.advertisement.services.persistence.model.AdGroupedModel;
import com.jfeat.am.module.advertisement.services.service.AdService;
import com.jfeat.crud.base.exception.BusinessCode;
import com.jfeat.crud.base.exception.BusinessException;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author admin
 * @since 2017-09-20
 */
@RestController
@RequestMapping("/api")
@Api("AD-轮播图")
public class PortalAdEndpoint {

    @Resource
    private AdService adService;
    @Resource
    private AdGroupMapper adGroupMapper;
    @Resource
    QueryAdLibraryDao queryAdLibraryDao;

    @GetMapping("/pub/banner/group/{group}")
    @ApiOperation("按组获取轮播图 [带组信息]")
    public Tip getAdGroup(@PathVariable String group) {
        AdGroupedModel model = adService.getAdRecordsByGroup(group);
        if(model != null && model.getAds() != null) {
            List<Ad> temp = model.getAds().stream().sorted((t1, t2) -> t1.getSeq().compareTo(t2.getSeq())).collect(Collectors.toList());
            model.setAds(temp);
        }
        return SuccessTip.create(model);
    }

    @ApiOperation("按组获取轮播图")
    @GetMapping("/pub/banner/records/{group}")
    public Tip Ad(@PathVariable String group,
                 @RequestParam(value = "enabled", required = false) Integer enabled) {
        return SuccessTip.create(queryAdLibraryDao.getAdRecordsByGroup(group, enabled));
    }

    @PostMapping("/banner")
    @ApiOperation("添加轮播图")
    public Tip createAd(@RequestBody Ad entity) {
        entity.setEnabled(1);
        return SuccessTip.create(adService.createMaster(entity));
    }

    @PostMapping("/banner/id/{identifier}")
    @ApiOperation("根据identifier添加轮播图")
    public Tip createAdByIdentifier(@PathVariable String identifier, @RequestBody AdRecord entity) {
        entity.setEnabled(1);
        if(entity.getImages()!=null && entity.getImages().size()>0){
            entity.setImage(entity.getImages().get(0).getUrl()) ;
        }
        AdGroup adGroup = new AdGroup();
        adGroup.setIdentifier(identifier);
        AdGroup query = adGroupMapper.selectOne(adGroup);
        entity.setGroupId(query == null ? null : query.getId());
        return SuccessTip.create(adService.createMaster(entity));
    }

    @PutMapping("/banner/{id}")
    @ApiOperation("更新轮播图")
    public Tip updateAd(@PathVariable Long id, @RequestBody Ad entity) {
        return SuccessTip.create(adService.updateMaster(entity));
    }

    @GetMapping("/pub/banner/{id}")
    @ApiOperation("轮播图详情")
    public Tip getAdInfo(@PathVariable Long id) {
        return SuccessTip.create(adService.retrieveMaster(id));
    }

    @DeleteMapping("/banner/{id}")
    @ApiOperation("删除轮播图")
    public Tip deleteAd(@PathVariable Long id) {
        return SuccessTip.create(adService.deleteMaster(id));
    }

    @PostMapping("/banner/{id}/enable")
    @ApiOperation("轮播图启用")
    public Tip enableAd(@PathVariable Long id) {
        Ad ad = new Ad();
        ad.setEnabled(1);
        ad.setId(id);
        return SuccessTip.create(adService.updateMaster(ad));
    }

    @PostMapping("/banner/{id}/disable")
    @ApiOperation("轮播图禁用")
    public Tip disableAd(@PathVariable Long id) {
        Ad ad = new Ad();
        ad.setId(id);
        ad.setEnabled(0);
        return SuccessTip.create(adService.updateMaster(ad));
    }

    @GetMapping("/pub/banner/libraries")
    @ApiOperation("图库列表")
    public Tip queryAdLibraryies(Page<AdLibraryRecord> page,
                                 @RequestParam(name = "current", required = false, defaultValue = "1") Integer pageNum,
                                 @RequestParam(name = "pageSize", required = false, defaultValue = "10") Integer pageSize,
                                 @RequestParam(name = "id", required = false) Long id,
                                 @RequestParam(name = "url", required = false) String url,
                                 @RequestParam(name = "orderBy", required = false) String orderBy,
                                 @RequestParam(name = "sort", required = false) String sort) {
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

        AdLibraryRecord record = new AdLibraryRecord();
        record.setId(id);
        record.setUrl(url);

        page.setRecords(queryAdLibraryDao.findAdLibraryPage(page, record, orderBy));

        return SuccessTip.create(page);
    }
}
