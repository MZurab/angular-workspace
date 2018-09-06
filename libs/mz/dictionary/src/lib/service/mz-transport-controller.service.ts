import {Injectable} from "@angular/core";
import {MzTransportGraphqlDefaultClass} from "./default/mz-transport-graphql-default.service";
import {MzTransportInterface} from "../res/@abstract/@interface/mz-transport.interface";

@Injectable()
export class MzTransportControllerService {
  // global method for access to passed transport
  public transport: MzTransportInterface;

  constructor(
    //@optional - add here your transport (if you want another transport REQUIRED implements 'MzTransportInterface' interface)
    private transportMethod: MzTransportGraphqlDefaultClass
  ) {
    this.transport = this.transportMethod;
  }
}
