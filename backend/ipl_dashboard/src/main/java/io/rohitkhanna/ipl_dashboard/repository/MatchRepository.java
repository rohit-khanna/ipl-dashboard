package io.rohitkhanna.ipl_dashboard.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import io.rohitkhanna.ipl_dashboard.model.MatchData;

public interface MatchRepository extends CrudRepository<MatchData, Long> {

    List<MatchData> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    default List<MatchData> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }

}
