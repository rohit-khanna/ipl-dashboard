package io.rohitkhanna.ipl_dashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.apache.tomcat.util.bcel.Const;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.rohitkhanna.ipl_dashboard.model.MatchData;
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

    @GetMapping("/team/{id}")
    public Team getTeam(@PathVariable Long id) {
        Team team = this.repo.findById(id);
        team.setMatches(matchRepo.findLatestMatchesByTeam(team.getName(), 5));
        return team;
    }

    @GetMapping("/teams")
    public List<Team> getTeamList() {
        return this.repo.findAll();
    }

    @GetMapping("/team/{id}/matches")
    public List<MatchData> getMatchesForTeam(@PathVariable Long id, @RequestParam int year) {
        Team team = this.repo.findById(id);

        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return matchRepo.getMatchesByTeamBetweenDates(team.getName(), startDate, endDate);
    }

}
