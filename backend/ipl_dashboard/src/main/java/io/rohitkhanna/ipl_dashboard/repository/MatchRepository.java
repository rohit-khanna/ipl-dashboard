package io.rohitkhanna.ipl_dashboard.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import io.rohitkhanna.ipl_dashboard.model.MatchData;

public interface MatchRepository extends CrudRepository<MatchData, Long> {

    List<MatchData> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    @Query("select m from MatchData m where (m.team1=:teamName or m.team2=:teamName) AND m.date between :dateStart and :dateEnd order by m.date desc")
    List<MatchData> getMatchesByTeamBetweenDates(@Param("teamName") String teamName,
            @Param("dateStart") LocalDate startDate, @Param("dateEnd") LocalDate endDate);

    default List<MatchData> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }

}
