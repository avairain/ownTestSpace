import devOption from './dev'
import prodOption from './prod'

export default process.env.NODE_ENV === 'production' ? devOption : prodOption
