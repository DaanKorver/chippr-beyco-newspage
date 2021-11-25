export default function formatDate(unformattedDate) {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
  const date = unformattedDate.match(/^([0-9]{4})-0*([0-9]{1,2})-0*([0-9]{1,2})$/).splice(1)
  const [year, month, day] = date
  return `${day} ${months[month - 1]}. ${year}`
}