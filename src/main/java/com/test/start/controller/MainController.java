package com.test.start.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class MainController {
	
	@GetMapping("/index")
	public String goIndex() {	
		return "주말마다 항상 스펙타클하고 파란만장하고 아주 그냥 도파민덩어리";
	}
	
    @GetMapping("/jin")
    public String goRest() {
        return "레스트 에이피아이";
    }
	
	@GetMapping("/")
	public String main() {
		return "월요일은 힘들다";
	}
}
