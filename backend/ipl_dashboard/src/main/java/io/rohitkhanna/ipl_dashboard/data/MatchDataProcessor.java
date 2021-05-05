package io.rohitkhanna.ipl_dashboard.data;

import java.time.LocalDate;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import io.rohitkhanna.ipl_dashboard.model.MatchData;

public class MatchDataProcessor implements ItemProcessor<MatchInput, MatchData> {
    // private static final Logger log =
    // LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public MatchData process(final MatchInput matchInput) throws Exception {
        MatchData matchData = new MatchData();

        matchData.setId(Long.parseLong(matchInput.getId()));
        matchData.setCity(matchInput.getCity());
        matchData.setDate(LocalDate.parse(matchInput.getDate()));
        matchData.setMatchWinner(matchInput.getWinner());
        matchData.setPlayerOfMatch(matchInput.getPlayer_of_match());
        matchData.setVenue(matchInput.getVenue());

        String firstInningsTeam, secondInningsTeam;
        if (matchInput.getToss_decision().equals("bat")) {
            firstInningsTeam = matchInput.getToss_winner();
            secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2()
                    : matchInput.getTeam1();
        } else {
            secondInningsTeam = matchInput.getToss_winner();
            firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2()
                    : matchInput.getTeam1();
        }

        matchData.setTeam1(firstInningsTeam); // team who batted first
        matchData.setTeam2(secondInningsTeam); // team who batted secondInningsTeam

        matchData.setTossDecision(matchInput.getToss_decision());
        matchData.setTossWinner(matchInput.getToss_winner());
        matchData.setResult(matchInput.getResult());
        matchData.setResultMargin(matchInput.getResult_margin());

        return matchData;
    }
}
