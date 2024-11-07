import { Flag, Flex, Typography } from '../src'
import { rawCountriesData } from '../src/i18n/rawCountriesData'

export default {
  title: 'Demo/Flag',
  component: Flag
}

export const AllFlags = () => (
  <>
    {Object.entries(rawCountriesData).map(([code, country]) => (
      <Flex key={code}>
        <Flag name={country.currency} mr={2} />
        <Typography>
          {country.full} ({country.currency})
        </Typography>
      </Flex>
    ))}
  </>
)
