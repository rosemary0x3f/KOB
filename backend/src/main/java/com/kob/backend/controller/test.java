package com.kob.backend.controller;
import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test/")
@CrossOrigin
public class test {

    @RequestMapping("index/")
    public List<String> index()
    {
        List<String> list = new LinkedList<String>();
        list.add("hello");
        list.add("world");
        return list;
    }
}
