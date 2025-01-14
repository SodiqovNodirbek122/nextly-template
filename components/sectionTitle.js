import React from "react"
import Container from "./container"

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left"
          ? " leading-6 indent-8 "
          : "items-center justify-center text-center"
      }`}
    >
      {props.title && (
        <h2 className="max-w-2xl mt-3 first-letter:capitalize text-3xl font-bold leading-snug tracking-tight text-voltiva-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-5xl py-4 text-xl leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  )
}

export default SectionTitle
