package com.test.start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Test01Application {

	public static void main(String[] args) {
		SpringApplication.run(Test01Application.class, args);
		System.out.println("무언가 바뀜");
	}

}
