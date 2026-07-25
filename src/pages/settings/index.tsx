import { SaveIcon } from "lucide-react"
import Container from "../../components/container"
import Button from "../../components/default-button"
import Input from "../../components/default-input"
import Heading from "../../components/heading"
import DefaultTemplate from "../../templates/DefaultTemplate"
import { useEffect, useRef } from "react"
import useTaskContext from "../../hooks/useTaskContext"
import { toaster } from "../../adapters/toaster"
import { inputsValidation } from "./helpers/inputsValidation"
import { setPageTitle } from "../../utils/setPageTitle"
import { siteConfig } from "../../constants/siteConfig"

const Settings = () => {
  const {state, dispatch} = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPageTitle(`Configurações | ${siteConfig.name}`);
  }, []);


  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toaster.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);
     
    inputsValidation(workTime, shortBreakTime, longBreakTime);
    dispatch({
      type: "CHANGE_SETTINGS",
      payload: {
        config: {
          workTime,
          shortBreakTime,
          longBreakTime,
        },
      },
    });
    toaster.success("Configurações salvas com sucesso!");
  }
  
  return (
    <DefaultTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e descanso longo.
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className="formRow">
            <Input id="workTime" labelText="Tempo de foco" ref={workTimeInputRef} defaultValue={state.config.workTime} type="number" />
          </div>
          <div className="formRow">
            <Input id="shortBreakTime" labelText="Descanso curto" ref={shortBreakTimeInputRef} defaultValue={state.config.shortBreakTime} type="number" />
          </div>
          <div className="formRow">
            <Input id="longBreakTime" labelText="Descanso longo" ref={longBreakTimeInputRef} defaultValue={state.config.longBreakTime} type="number" />
          </div>
          <div className="formRow">
            <Button icon={<SaveIcon />} aria-label="Salvar configurações" title="Salvar configurações"/>
          </div>
        </form>
      </Container>
    </DefaultTemplate>
  )
}

export default Settings