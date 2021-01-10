import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayerssService {
  playerUrl = 'api/players';
  constructor(private httpClient: HttpClient) { }
  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }

  getPlayerById(id: any) {
    return this.httpClient.get(`${this.playerUrl}/${id}`)
  }

  deletePlayer(id: any) {
    return this.httpClient.delete(`${this.playerUrl}/${id}`)
  }

  updatePlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/${player.id}`, player)


  }
  addPlayer(player: any) {
    return this.httpClient.post(this.playerUrl, player)

  }
}
