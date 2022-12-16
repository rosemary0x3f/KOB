package com.kob.backend.service.user.bot;

import java.util.Map;

// 接口中方法前面的public可以不用写
public interface UpdateService {
    Map<String,String> update(Map<String,String> data);
}
