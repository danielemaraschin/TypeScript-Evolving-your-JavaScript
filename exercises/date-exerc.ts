class DateUtils {

    public static ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}

const dateUtils = new DateUtils();
const ehDiaUtil = dateUtils.ehDiaUtil(new Date());