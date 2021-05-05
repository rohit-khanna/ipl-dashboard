package io.rohitkhanna.ipl_dashboard.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import io.rohitkhanna.ipl_dashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, String> {

    Team findByName(String teamName);

    List<Team> findAll();

    Team findById(long Id);

}
