import { Flag, Typography, Flex } from '../src'
import { rawCountriesData } from '../src/i18n/rawCountriesData'

export default {
  title: 'Demo/Flag',
  component: Flag
}

export const AllFlags = () => (
  <>
    {Object.values(rawCountriesData).map(country => (
      <Flex>
        <Flag name={country.currency} mr={2} />
        <Typography>
          {country.full} ({country.currency})
        </Typography>
      </Flex>
    ))}
  </>
)
