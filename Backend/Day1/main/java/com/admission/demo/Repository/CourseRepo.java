package com.admission.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.admission.demo.Model.Course;

@Repository
public interface CourseRepo extends JpaRepository<Course, Long> {
}