import type { SiteText } from '../i18n'
import CurriculumView from './CurriculumView'

type CurriculumProps = {
  curriculumText: SiteText['curriculum']
}

const Curriculum = ({ curriculumText }: CurriculumProps) => {
  return <CurriculumView curriculumText={curriculumText} />
}

export default Curriculum
