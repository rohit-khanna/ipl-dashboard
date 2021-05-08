package io.rohitkhanna.ipl_dashboard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.rohitkhanna.ipl_dashboard.model.Team;
import io.rohitkhanna.ipl_dashboard.repository.MatchRepository;
import io.rohitkhanna.ipl_dashboard.repository.TeamRepository;

@CrossOrigin(origins = "http://localhost:3005")
@RestController
public class TeamController {

    private TeamRepository repo;
    private MatchRepository matchRepo;

    public TeamController(TeamRepository repo, MatchRepository matchRepo) {
        this.repo = repo;
        this.matchRepo = matchRepo;
    }

    // @GetMapping("/team/{teamName}")
    // public Team getTeam(@PathVariable String teamName) {
    // Team team = this.repo.findByName(teamName);
    // team.setMatches(matchRepo.findLatestMatchesByTeam(teamName, 4));
    // return team;
    // }

    @GetMapping("/team/{id}")
    public Team getTeam(@PathVariable Long id) {
        Team team = this.repo.findById(id);
        team.setMatches(matchRepo.findLatestMatchesByTeam(team.getName(), 4));
        return team;
    }

    @GetMapping("/teams")
    public List<Team> getTeamList() {
        return this.repo.findAll();
    }

}
