import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import TeamInfo from '../teamInfo';
import MatchList from '../matchList';
import MatchDetail from '../matchDetail';

export default function Content() {
    return (
        <main className="content">
            <Switch>
                <Route path={`/team/:teamId`} exact>
                    <TeamInfo />
                </Route>
                <Route path={`/team/:teamId/matches`} exact>
                    <MatchList />
                </Route>
                <Route path={`/team/:teamId/matches/:matchId`} exact>
                    <MatchDetail />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </main>
    )
}
