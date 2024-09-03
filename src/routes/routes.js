const AdRouter = require("./apiAd")
const TaskRouter = require("./apiTask")
const VacancyRouter = require("./apiVacancy")

const Routes = () => {
    return [AdRouter,VacancyRouter,TaskRouter]
}

module.exports = Routes