interface IDriveConfig {
    root: string;
    file: { [key: string]: string };
}

interface ITopics {
    pub: IPub;
    sub: ISub;
}

interface IPub {
    machineMission: string;
    machineDrive: string;
    machineError: string;
    machineTetherPoint: string;
    machineValves: string;
    armRequest: string;
    baseRequest: string;
}

interface ISub {
    missionStatus: string;
    missionProgress: string;
    machineIndicators: string;
    machineDrive: string;
    machineError: string;
    machineTetherPoint: string;
    valvesStatus: string;
    armStatus: string;
    baseStatus: string;
}

interface ISocket {
    emit: IEmit;
    listen: IListen;
    disconnect: string;
}

interface IEmit {
    missionStatus: string;
    missionProgress: string;
    machineIndicators: string;
    machineDrive: string;
    machineError: string;
    machineTetherPoint: string;
    valvesStatus: string;
    armStatus: string;
    baseStatus: string;
}

interface IListen {
    getMissionList: string;
    getMission: string;
    missionRequest: string;
    driveRequest: string;
    tetherPointRequest: string;
    missionStatus: string;
    machineIndicators: string;
    machineDrive: string;
    missionProgress: string;
    machineError: string;
    machineTetherPoint: string;
    errorRequest: string;
    login: string;
    valvesRequest: string;
    valvesStatus: string;
    armRequest: string;
    armStatus: string;
    baseRequest: string;
    baseStatus: string;
}

export interface IConfig {
    drive: IDriveConfig;
    topics: ITopics;
    sockets: ISocket;
}
