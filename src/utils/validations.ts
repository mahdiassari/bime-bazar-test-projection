import * as Yup from "yup";

export const InformationFormValidations = Yup.object().shape({
    nationalId: Yup.string()
        .required("این قسمت نمی‌تواند خالی باشد")
        .test('nationalId', 'کد‌ملی باید ۱۰ رقم باشد.', value => /(^([0-9]){10}$)/.test(value.toString())
        ),
    phoneNumber: Yup.number()
        .required("این قسمت نمی‌تواند خالی باشد")
        .min(999999999, "شماره موبایل نمی تواند کمتر از ۱۰ رقم باشد.")
        .max(99999999999, "شماره موبایل نمی تواند بیشتر از ۱۱ رقم باشد.")
        .test('phoneNumber', "شماره تلفن همراه وارد شده صحیح نمیباشد.", value => /(\+98|0)?9\d{9}/.test(value.toString())),
});