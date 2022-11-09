import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Form from "../page/form";

describe('Form', () => {
    test('render Form component', () => {
        render(<Form/>)
        expect(screen.getByLabelText(/Nama:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Tempat:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Komentar:/)).toBeInTheDocument()
    })

    test('input data with a value', () => {
        render(<Form/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "Chand" } }
        )

        fireEvent.input(screen.getByRole("textbox",
            { name: /tempat/i }),
            { target: { value: "kopi Nako Kalisari"} }
        )

        fireEvent.input(screen.getByRole("textbox",
        { name: /Komentar/i }),
        { target: { value: "ini komentarnya" } }    
    )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Chand")
        expect(screen.getByLabelText(/Tempat:/)).toHaveValue("Kopi Nako Kalisari")
        expect(screen.getByLabelText(/Komentar:/)).toHaveValue("ini komentarnya")

    })

    test('validation on name', () => {
        render(<Form/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i } ),
            { target: { value: "Harus huruf, gaboleh yang lain 321" } }
        )

        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
    })

    test('validation on tempat', () => {
        render(<Form/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /tempat/i } ),
            { target: { value: "Ini tempatnya" } }
        )

        expect(screen.getByText("Tempat Tidak Sesuai")).toBeInTheDocument()
    })

    test('validation on komentar', () => {
        render(<Form/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /komentar/i } ),
            { target: { value: "Ini tempatnya" } }
        )

        expect(screen.getByText(" ")).toBeInTheDocument()
    })


    test('when the input is empty', () => {
        render(<Form/>)

        const alert = jest.spyOn(window, "alert").mockImplementation() // variable to get a alert from javascript
        
        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "" } }
        )

        fireEvent.input(screen.getByRole("textbox",
            { name: /tempat/i }),
            { target: { value: "" } }
        )

        fireEvent.input(screen.getByRole("textbox",
            { name: /Komentar/i }),
            { target: { value: "" } }    
        )

        fireEvent.click(screen.getByRole("button", {name: /submit/i}))

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("")
        expect(screen.getByLabelText(/Tempat:/)).toHaveValue("")
        expect(screen.getByLabelText(/Komentar:/)).toHaveDisplayValue("")


        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeRequired()
        expect(screen.getByLabelText(/Tempat:/)).toBeRequired()
        expect(screen.getByLabelText(/Komentar:/)).toBeRequired()
        expect(alert).not.toBe()
    })
})