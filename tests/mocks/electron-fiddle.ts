import { AppMock, MonacoMock } from './mocks';

export class ElectronFiddleMock {
  public addEventListener = jest.fn();
  public app = new AppMock();
  public appPaths = {
    userData: '/fake/path',
    home: `~`,
  };
  public arch = process.arch;
  public blockAccelerators = jest.fn();
  public confirmQuit = jest.fn();
  public getTemplate = jest.fn();
  public getTemplateValues = jest.fn();
  public getTestTemplate = jest.fn();
  public macTitlebarClicked = jest.fn();
  public monaco = new MonacoMock();
  public platform = process.platform;
  public pushOutputEntry = jest.fn();
  public reloadWindows = jest.fn();
  public removeAllListeners = jest.fn();
  public selectLocalVersion = jest.fn();
  public sendReady = jest.fn();
  public setNativeTheme = jest.fn();
  public setShowMeTemplate = jest.fn();
  public showSaveDialog = jest.fn();
  public showWarningDialog = jest.fn();
  public showWindow = jest.fn();
  public taskDone = jest.fn();
}
