var base_url = "https://api.football-data.org/";

function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

function json(response) {
    return response.json();
}

function error(error) {
    console.log("Error : " + error);
}

function getLeaguesHome() {
    if ("caches" in window) {
        caches.match(base_url + "v2/competitions/", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var competitionsHTML = "";
                    data.competitions.forEach(function(competitions) {
                        if (competitions.id == '2002' || competitions.id == '2021') {
                            competitionsHTML += `
              <div class="col s6">
                <div class="card">
                <a href="./pages/detailLeague.html?id=${competitions.id}">
                <div class="card-content">
                  <p>${competitions.name}</p>
                </div>
                </a>
              </div>
              </div>
                `;
                        }
                    });
                    document.getElementById("leagues").innerHTML = competitionsHTML;
                });
            }
        });
    }
    fetch(base_url + "v2/competitions/", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var competitionsHTML = "";
            data.competitions.forEach(function(competitions) {
                if (competitions.id == '2002' || competitions.id == '2021') {
                    competitionsHTML += `
          <div class="col s6">
            <div class="card">
            <a href="./pages/detailLeague.html?id=${competitions.id}">
            <div class="card-content">
              <p>${competitions.name}</p>
            </div>
            </a>
          </div>
          </div>
            `;
                }
            });
            document.getElementById("leagues").innerHTML = competitionsHTML;
        })
        .catch(error);
}

function getStandingsHome() {
    if ("caches" in window) {
        caches.match(base_url + "v2/competitions/2021/standings", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var standingsHTML = "";
                    document.getElementById("competitionName").innerHTML = data.competition.name;
                    document.getElementById("seasonStartName").innerHTML = data.season.startDate;
                    document.getElementById("seasonEndName").innerHTML = data.season.endDate;
                    data.standings[0].table.forEach(function(standings) {
                        if (standings.position == '1' || standings.position == '2' || standings.position == '3' || standings.position == '4' || standings.position == '5') {
                            standingsHTML += `
            <tr>
              <td>${standings.position}</td>
              <td>${standings.team.name}</td>
              <td>${standings.points}</td>
            </tr>
          `;
                        }
                    });
                    document.getElementById("tblStandings").innerHTML = standingsHTML;
                });
            }
        });
    }
    fetch(base_url + "v2/competitions/2021/standings", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var standingsHTML = "";
            document.getElementById("competitionName").innerHTML = data.competition.name;
            document.getElementById("seasonStartName").innerHTML = data.season.startDate;
            document.getElementById("seasonEndName").innerHTML = data.season.endDate;
            data.standings[0].table.forEach(function(standings) {
                if (standings.position == '1' || standings.position == '2' || standings.position == '3' || standings.position == '4' || standings.position == '5') {
                    standingsHTML += `
            <tr>
              <td>${standings.position}</td>
              <td>${standings.team.name}</td>
              <td>${standings.points}</td>
            </tr>
          `;
                }
            });
            document.getElementById("tblStandings").innerHTML = standingsHTML;
        })
        .catch(error);
}

function getTeamsHome() {
    if ("caches" in window) {
        caches.match(base_url + "v2/teams/", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var teamsHTML = "";
                    data.teams.forEach(function(teams) {
                        if (teams.id == '57' || teams.id == '58' || teams.id == '61' || teams.id == '62' || teams.id == '63') {
                            teamsHTML += `
            <tr>
              <td>${teams.name}</td>
              <td>${teams.website}</td>
              <td><img src="${teams.crestUrl}" width="20px" /></td>
            </tr>
          `;
                        }
                    });
                    document.getElementById("tblTeams").innerHTML = teamsHTML;
                });
            }
        });
    }
    fetch(base_url + "v2/teams/", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var teamsHTML = "";
            data.teams.forEach(function(teams) {
                if (teams.id == '57' || teams.id == '58' || teams.id == '61' || teams.id == '62' || teams.id == '63') {
                    teamsHTML += `
            <tr>
              <td>${teams.name}</td>
              <td>${teams.website}</td>
              <td><img src="${teams.crestUrl}" width="20px" /></td>
            </tr>
          `;
                }
            });
            document.getElementById("tblTeams").innerHTML = teamsHTML;
        })
        .catch(error);
}


function getLeagues() {
    if ("caches" in window) {
        caches.match(base_url + "v2/competitions/", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var competitionsHTML = "";
                    data.competitions.forEach(function(competitions) {
                        if (competitions.id == '2001' || competitions.id == '2002' || competitions.id == '2003' || competitions.id == '2021' || competitions.id == '2014' || competitions.id == '2015') {
                            competitionsHTML += `
              <div class="col s6">
                <div class="card">
                <a href="./detailLeague.html?id=${competitions.id}">
                <div class="card-content">
                  <h2 class="card-title">${competitions.name}</h2>
                </div>
                </a>
              </div>
              </div>
                `;
                        }
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("body-content").innerHTML = competitionsHTML;
                });
            }
        });
    }

    fetch(base_url + "v2/competitions/", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var competitionsHTML = "";
            data.competitions.forEach(function(competitions) {
                if (competitions.id == '2001' || competitions.id == '2002' || competitions.id == '2003' || competitions.id == '2021' || competitions.id == '2014' || competitions.id == '2015') {
                    competitionsHTML += `
          <div class="col s6">
            <div class="card">
            <a href="./detailLeague.html?id=${competitions.id}">
            <div class="card-content">
              <p>${competitions.name}</p>
            </div>
            </a>
          </div>
          </div>
            `;
                }
            });
            document.getElementById("leagues").innerHTML = competitionsHTML;
        })
        .catch(error);
}

function getLeaguesById() {

    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    if ("caches" in window) {
        caches.match(base_url + "v2/competitions/" + idParam, { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var competitionHTML = `
          <div class="card">
            <div class="card-content">
              <h4 class="card-title">${data.name}</h4>
              <p>${data.lastUpdated}</p>
            </div>
          </div>
          <table class="striped highlight centered responsive-table">
              <thead>
                <tr>
                  <th>Current Match Day</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Winner</th>
                </tr>
              </thead>
              <tbody id="tblSeasons">

              </tbody>
            </table>
            <div id="modal" class="modal bottom-sheet">
              <div class="modal-content center" id="modalCntn">
                
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
              </div>
            </div>
        `;
                    var seasonsHTML = "";
                    data.seasons.forEach(function(seasons) {
                        if (seasons.currentMatchday == null && seasons.winner != null) {
                            seasonsHTML += `
              <tr>
                <td>0</td>
                <td>${seasons.startDate}</td>
                <td>${seasons.endDate}</td>
                <td><a class="waves-effect waves-light btn-small modal-trigger" href="#modal" onclick="ubahModalWin('${seasons.winner.crestUrl}','${seasons.winner.name}');">Detail</a></td>
              </tr>
            `;
                        } else {
                            seasonsHTML += `
              <tr>
                <td>${seasons.currentMatchday}</td>
                <td>${seasons.startDate}</td>
                <td>${seasons.endDate}</td>
                <td><a class="waves-effect waves-light btn-small" href="" disabled>Detail</a></td>                
              </tr>
            `;
                        }
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("body-content").innerHTML = competitionHTML;
                    document.getElementById("tblSeasons").innerHTML = seasonsHTML;
                    $(document).ready(function() {
                        $('.modal').modal();
                    })
                });
            }
        });
    }

    fetch(base_url + "v2/competitions/" + idParam, { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } })
        .then(status)
        .then(json)
        .then(function(data) {
            var competitionHTML = `
          <div class="card">
            <div class="card-content">
              <h4 class="card-title">${data.name}</h4>
              <p>${data.lastUpdated}</p>
            </div>
          </div>
          <table class="striped highlight centered responsive-table">
              <thead>
                <tr>
                  <th>Current Match Day</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Winner</th>
                </tr>
              </thead>
              <tbody id="tblSeasons">

              </tbody>
            </table>
            <div id="modal" class="modal bottom-sheet">
              <div class="modal-content center" id="modalCntn">
                
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
              </div>
            </div>
        `;
            var seasonsHTML = "";
            data.seasons.forEach(function(seasons) {
                if (seasons.currentMatchday == null && seasons.winner != null) {
                    seasonsHTML += `
              <tr>
                <td>0</td>
                <td>${seasons.startDate}</td>
                <td>${seasons.endDate}</td>
                <td><a class="waves-effect waves-light btn-small modal-trigger" href="#modal" onclick="ubahModalWin('${seasons.winner.crestUrl}','${seasons.winner.name}');">Detail</a></td>
              </tr>
            `;
                } else {
                    seasonsHTML += `
              <tr>
                <td>${seasons.currentMatchday}</td>
                <td>${seasons.startDate}</td>
                <td>${seasons.endDate}</td>
                <td><a class="waves-effect waves-light btn-small" href="" disabled>Detail</a></td>                
              </tr>
            `;
                }
            });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("body-content").innerHTML = competitionHTML;
            document.getElementById("tblSeasons").innerHTML = seasonsHTML;
            $(document).ready(function() {
                $('.modal').modal();
            })
        });
}

function ubahModalWin(image, name) {
    var winnerHTML = `
    <img src="${image}" width="100px"/>    
    <h5>${name}</h5>
  `;
    document.getElementById("modalCntn").innerHTML = winnerHTML;
}

function getStandings() {
    if ("caches" in window) {
        caches.match(base_url + "v2/competitions/", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var competitionsHTML = "";
                    data.competitions.forEach(function(competitions) {
                        if (competitions.id == '2001' || competitions.id == '2002' || competitions.id == '2003' || competitions.id == '2021' || competitions.id == '2014' || competitions.id == '2015') {
                            competitionsHTML += `
                              <div class="col s6">
                                <div class="card">
                                <a href="./detailStanding.html?id=${competitions.id}">
                                <div class="card-content">
                                  <h2 class="card-title">${competitions.name}</h2>
                                </div>
                                </a>
                              </div>
                              </div>
                            `;
                        }
                    });
                    document.getElementById("body-content").innerHTML = competitionsHTML;
                });
            }
        });
    }

    fetch(base_url + "v2/competitions/", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var competitionsHTML = "";
            data.competitions.forEach(function(competitions) {
                if (competitions.id == '2001' || competitions.id == '2002' || competitions.id == '2003' || competitions.id == '2021' || competitions.id == '2014' || competitions.id == '2015') {
                    competitionsHTML += `
                      <div class="col s6">
                        <div class="card">
                        <a href="./detailStanding.html?id=${competitions.id}">
                        <div class="card-content">
                          <p>${competitions.name}</p>
                        </div>
                        </a>
                      </div>
                      </div>
                    `;
                }
            });
            document.getElementById("leagues").innerHTML = competitionsHTML;
        })
        .catch(error);
}

function getStandingsById() {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    if ("caches" in window) {
        caches.match(base_url + "v2/competitions/" + idParam + "/standings", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var standingsHTML = "";
                    document.getElementById("competitionName").innerHTML = data.competition.name;
                    document.getElementById("seasonStartName").innerHTML = data.season.startDate;
                    document.getElementById("seasonEndName").innerHTML = data.season.endDate;
                    data.standings[0].table.forEach(function(standings) {
                        standingsHTML += `
                          <tr>
                            <td>${standings.position}</td>
                            <td>${standings.team.name}</td>
                            <td>${standings.won}</td>
                            <td>${standings.draw}</td>
                            <td>${standings.lost}</td>
                            <td>${standings.goalsFor}</td>
                            <td>${standings.goalDifference}</td>
                            <td>${standings.goalsAgainst}</td>
                            <td>${standings.points}</td>
                          </tr>
                        `;
                    });
                    document.getElementById("tblStandings").innerHTML = standingsHTML;
                });
            }
        });
    }

    fetch(base_url + "v2/competitions/" + idParam + "/standings", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } })
        .then(status)
        .then(json)
        .then(function(data) {
            var standingsHTML = "";
            document.getElementById("competitionName").innerHTML = data.competition.name;
            document.getElementById("seasonStartName").innerHTML = data.season.startDate;
            document.getElementById("seasonEndName").innerHTML = data.season.endDate;
            data.standings[0].table.forEach(function(standings) {
                standingsHTML += `
              <tr>
                <td>${standings.position}</td>
                <td>${standings.team.name}</td>
                <td>${standings.won}</td>
                <td>${standings.draw}</td>
                <td>${standings.lost}</td>
                <td>${standings.goalsFor}</td>
                <td>${standings.goalDifference}</td>
                <td>${standings.goalsAgainst}</td>
                <td>${standings.points}</td>
              </tr>
            `;
            });
            document.getElementById("tblStandings").innerHTML = standingsHTML;
        });
}

function getTeams() {
    if ("caches" in window) {
        caches.match(base_url + "v2/teams/", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var teamsHTML = "";
                    data.teams.forEach(function(teams) {
                        if (teams.crestUrl == null || teams.crestUrl == "" || teams.id == 322) {
                            teamsHTML += `
                            <tr>
                              <td>${teams.name}</td>
                              <td>${teams.website}</td>
                              <td>no image</td>
                              <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="addFav('${teams.id}');">Add to Favorite</a></td>                     
                            </tr>
                          `;
                        } else {
                            teamsHTML += `
                            <tr>
                              <td>${teams.name}</td>
                              <td>${teams.website}</td>
                              <td><img src="${teams.crestUrl}" width="20px" /></td>
                              <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="addFav('${teams.id}');">Add to Favorite</a></td>                     
                            </tr>
                          `;
                        }
                    });
                    document.getElementById("tblTeams").innerHTML = teamsHTML;
                });
            }
        });
    }
    fetch(base_url + "v2/teams/", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var teamsHTML = "";
            data.teams.forEach(function(teams) {
                if (teams.crestUrl == null || teams.crestUrl == "" || teams.id == 322) {
                    teamsHTML += `
                  <tr>
                    <td>${teams.name}</td>
                    <td>${teams.website}</td>
                    <td>no image</td>
                    <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="addFav('${teams.id}');">Add to Favorite</a></td>                     
                  </tr>
                `;
                } else {
                    teamsHTML += `
                  <tr>
                    <td>${teams.name}</td>
                    <td>${teams.website}</td>
                    <td><img src="${teams.crestUrl}" width="20px" /></td>
                    <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="addFav('${teams.id}');">Add to Favorite</a></td>                     
                  </tr>
                `;
                }
            });
            document.getElementById("tblTeams").innerHTML = teamsHTML;
        })
        .catch(error);
}

function getTeamsFav() {
    if ("caches" in window) {
        caches.match(base_url + "v2/teams/", { headers: { 'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69' } }).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var count = 0;
                    var teamsHTML = "";
                    data.teams.forEach(function(teams) {
                        var objectStore = db.transaction("favorite").objectStore("favorite");
                        objectStore.openCursor().onsuccess = function(event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                if (cursor.key == teams.id) {
                                    count++;
                                    if (teams.crestUrl == null || teams.crestUrl == "" || teams.id == 322) {
                                        teamsHTML += `
                                        <tr>
                                          <td>${teams.name}</td>
                                          <td>${teams.website}</td>
                                          <td>no image</td>
                                          <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="removeFav('${teams.id}');">Remove</a></td>                     
                                        </tr>
                                      `;
                                    } else {
                                        teamsHTML += `
                                        <tr>
                                          <td>${teams.name}</td>
                                          <td>${teams.website}</td>
                                          <td><img src="${teams.crestUrl}" width="20px" /></td>
                                          <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="removeFav('${teams.id}');">Remove</a></td>                     
                                        </tr>
                                      `;
                                    }
                                }
                                cursor.continue();
                            } else {
                                if (count == 0) {
                                    teamsHTML = `
                                    <tr>
                                      <td colspan="4">Nothing's Team Favorite</td>
                                    </tr>
                                  `;
                                }
                                document.getElementById("tblTeams").innerHTML = teamsHTML;
                            }
                        };
                    });
                });
            }
        });
    }
    fetch(base_url + "v2/teams/", {
            headers: {
                'X-Auth-Token': 'a2bdb09e59a746818daed0d1d3365a69'
            }
        })
        .then(status)
        .then(json)
        .then(function(data) {
            var count = 0;
            var teamsHTML = "";
            data.teams.forEach(function(teams) {
                var objectStore = db.transaction("favorite").objectStore("favorite");
                objectStore.openCursor().onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        if (cursor.key == teams.id) {
                            count++;
                            if (teams.crestUrl == null || teams.crestUrl == "" || teams.id == 322) {
                                teamsHTML += `
                                  <tr>
                                    <td>${teams.name}</td>
                                    <td>${teams.website}</td>
                                    <td>no image</td>
                                    <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="removeFav('${teams.id}');">Remove</a></td>                     
                                  </tr>
                                `;
                            } else {
                                teamsHTML += `
                                  <tr>
                                    <td>${teams.name}</td>
                                    <td>${teams.website}</td>
                                    <td><img src="${teams.crestUrl}" width="20px" /></td>
                                    <td><a class="waves-effect waves-light btn-small modal-trigger" onclick="removeFav('${teams.id}');">Remove</a></td>                     
                                  </tr>
                                `;
                            }
                        }
                        cursor.continue();
                    } else {
                        if (count == 0) {
                            teamsHTML = `
                              <tr>
                                <td colspan="4">Nothing's Team Favorite</td>
                              </tr>
                            `;
                        }
                        document.getElementById("tblTeams").innerHTML = teamsHTML;
                    }
                };
            });
        })
        .catch(error);
}