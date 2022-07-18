import { Request, Response } from 'express'
import Usuario from '../models/usuario'

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll()
    res.json({ usuarios })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Ocurrió un error interno',
    })
  }
}

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const usuario = await Usuario.findByPk(id)

    if (usuario) {
      res.json(usuario)
    } else {
      res.status(404).json({
        msg: `El usuario con id ${id} no existe`,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Ocurrió un error interno',
    })
  }
}

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    })

    if (existeEmail) {
      return res.status(400).json({
        msg: `El email ${body.email} ya existe`,
      })
    }

    const usuario = await Usuario.create(body)
    res.json(usuario)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Ocurrió un error interno',
    })
  }
}

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
  try {
    const usuario = await Usuario.findByPk(id)
    if (!usuario) {
      return res.status(404).json({
        msg: `El usuario con id ${id} no existe`,
      })
    }

    await usuario.update(body)
    res.json(usuario)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Ocurrió un error interno',
    })
  }
}

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const usuario = await Usuario.findByPk(id)
    if (!usuario) {
      return res.status(404).json({
        msg: `El usuario con id ${id} no existe`,
      })
    }

    //Eliminación física:
    // await usuario.destroy()

    await usuario.update({ estado: false })
    res.json(usuario)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Ocurrió un error interno',
    })
  }
}
